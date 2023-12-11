import React, { useRef, useState, useEffect } from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import { Box, Text } from "native-base";
import { Camera } from "expo-camera";
import PropTypes from "prop-types";
import * as FileSystem from "expo-file-system";
import { useIsFocused } from "@react-navigation/native";

import useStore from "../store/store";
import styles from "../styles/style";

export default function StartCameraScreen({ navigation }) {
  const cameraRef = useRef(null);
  const { setSelectedImage, setImageBase64 } = useStore();
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(async() => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  }, []);

  const isFocused = useIsFocused();
  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setSelectedImage(photo.uri);
      if (Platform.OS === "web") {
        setImageBase64(photo.uri);
      } else {
        const base64Image = await FileSystem.readAsStringAsync(photo.uri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        setImageBase64(`data:image/jpeg;base64,${base64Image}`);
      }
      navigation.navigate("SelectedImage");
    }
  };

  if (hasPermission === null) {
    return <View style={styles.container}/>;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text marginX={5} textAlign="center" maxWidth="90%" fontSize={16}>
        Make sure the
        {" "}
        <Text fontWeight="bold" color="#4B784A">problem</Text>
        {" "}
        of the
        {" "}
        <Text fontWeight="bold" color="#4B784A">plant&apos;s leaves</Text>
        {" "}
        is clearly visible (eg: spots, color differences, etc.)
      </Text>
      <Box margin={5} bg="#FEFEE2" borderRadius={8}>
        <View>
          {isFocused &&
            <Camera
              type={Camera.Constants.Type.back}
              ref={cameraRef}
              ratio="4:3"
            >
              <View style={styles.cameraContainer}>
                <TouchableOpacity
                  style={styles.captureButton}
                  onPress={takePicture}
                >
                </TouchableOpacity>
              </View>
            </Camera>
          }
        </View>
      </Box>
    </View>
  );
}

StartCameraScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
