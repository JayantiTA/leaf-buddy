import React from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import { Image, Box, Text, Icon } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { useAssets } from "expo-asset";
import PropTypes from "prop-types";

import useStore from "../store/store";
import styles from "../styles/style";

export default function HomeScreen({ navigation }) {
  const [assets, ] = useAssets([require("../../assets/plant-character.png")]);
  const { setSelectedImage, setImageBase64 } = useStore();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      try {
        if (Platform.OS !== "web") {
          const base64Image = await FileSystem.readAsStringAsync(result.assets[0].uri, {
            encoding: FileSystem.EncodingType.Base64,
          });
          setImageBase64(`data:image/jpeg;base64,${base64Image}`);
        } else {
          setImageBase64(result.assets[0].uri);
        }

        setSelectedImage(result.assets[0].uri);
        navigation.navigate("SelectedImage");
      } catch (error) {
        console.error("Error reading image file:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Box bg="#9C953D" rounded="full" paddingX="5" paddingY="1.5" margin="3">
        <Text color="white" fontSize="lg">Start checking your leaves!</Text>
      </Box>
      {assets ?
        <Image source={assets[0]} alt="Cute Plant" size="xl" width={400} height={350} /> :
        null
      }
      <TouchableOpacity
        onPress={() => navigation.navigate("StartCamera")}
        style={[styles.button, styles.homeScreenButton]}
      >
        <Text color="white" fontSize="lg" marginLeft={5}>Take a picture</Text>
        <Icon as={MaterialIcons} name="camera-alt" size="lg" color="white" marginRight={5} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={pickImage}
        style={[styles.button, styles.homeScreenButton]}
      >
        <Text color="white" fontSize="lg" marginLeft={5}>Pick from gallery</Text>
        <Icon as={MaterialIcons} name="photo-library" size="lg" color="white" marginRight={5} />
      </TouchableOpacity>
    </View>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
