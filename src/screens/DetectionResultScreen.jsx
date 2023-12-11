import React from "react";
import { Linking, TouchableOpacity, View } from "react-native";
import { Image, Box, Text } from "native-base";
import PropTypes from "prop-types";

import useStore from "../store/store";
import styles from "../styles/style";

export default function DetectionResultScreen({ navigation }) {
  const { selectedImage, detectionResult, confidence, plantName } = useStore();

  const redirectToBrowser = () => {
    const googleSearchUrl = `https://www.google.com/search?q=${plantName}+${detectionResult}`;
    Linking.openURL(googleSearchUrl).catch((err) => console.error("Error opening URL:", err));
  };

  return (
    <View style={styles.container}>
      <Text marginX={5} textAlign="center" maxWidth="90%" fontSize={18}>
        Detection Result: { plantName }
      </Text>
      <Text marginX={5} textAlign="center" color="#4B784A" fontWeight="bold" maxWidth="90%" fontSize={22}>
        { detectionResult } { Number(confidence * 100).toFixed(2) }%
      </Text>
      <Box margin={10} bg="#FEFEE2" borderRadius={8}>
        <Image
          source={{
            uri: selectedImage,
          }}
          alt="Alternate Text"
          size="2xl"
          resizeMode="cover"
        />
      </Box>
      <TouchableOpacity
        onPress={redirectToBrowser}
        style={[styles.button, styles.greenButton]}
      >
        <Text color="white" fontSize="lg">Search on web browser</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={[styles.button, styles.grayButton]}
      >
        <Text color="white" fontSize="lg">Back to home</Text>
      </TouchableOpacity>
    </View>
  );
}

DetectionResultScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
