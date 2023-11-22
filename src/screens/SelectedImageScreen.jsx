import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Image, Box, Text, Icon, Select } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import PropTypes from "prop-types";
import { API_URL } from "@env";

import useStore from "../store/store";
import styles from "../styles/style";

export default function SelectedImageScreen({ navigation }) {
  const { selectedImage, setDetectionResult, setConfidence, plantName, setPlantName } = useStore();
  
  const predict = () => {
    fetch(`${API_URL}/classify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: selectedImage, plant: plantName }),
    })
      .then(response => response.json())
      .then(data => {
        setDetectionResult(data.class_name);
        setConfidence(data.confidence);
        navigation.navigate("DetectionResult");
      })
      .catch(error => console.error("Error:", error));
  };

  const handleValueChange = (value) => {
    setPlantName(value);
  };

  return (
    <View style={styles.container}>
      <Text marginX={5} textAlign="center" maxWidth={350} margin={3} fontSize={14}>
        Make sure the
        {" "}
        <Text fontWeight='bold' color='#4B784A'>problem</Text>
        {" "}
        of the
        {" "}
        <Text fontWeight='bold' color='#4B784A'>plant&apos;s leaves</Text>
        {" "}
        is clearly visible (eg: spots, color differences, etc.)
      </Text>
      <Box margin={2} borderRadius={8}>
        <Image
          source={{
            uri: selectedImage,
          }}
          alt="Alternate Text"
          size="2xl"
          resizeMode="cover"
        />
      </Box>
      <Select margin={3} minWidth="200" accessibilityLabel="Choose Plant" placeholder="Choose Plant" fontSize="md" _selectedItem={{
        bg: "teal.600",
        endIcon: <Icon size={5} as={<MaterialIcons name="check" />}
        />,
      }} selectedValue={plantName} onValueChange={handleValueChange} mt="1">
        <Select.Item label="Pepper Bell" value="pepper_bell" />
        <Select.Item label="Potato" value="potato" />
        <Select.Item label="Tomato" value="tomato" />
      </Select>
      <TouchableOpacity
        onPress={() => predict()}
        style={{
          backgroundColor: "#4B784A",
          padding: 10,
          borderRadius: 8,
          margin: 5,
          minWidth: 300,
          alignItems: "center",
        }}
      >
        <Text color="white" fontSize="md" fontWeight="semibold">Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          backgroundColor: "#8E8D94",
          padding: 10,
          borderRadius: 8,
          margin: 5,
          minWidth: 300,
          alignItems: "center",
        }}
      >
        <Text color="white" fontSize="md" fontWeight="semibold">Back to home</Text>
      </TouchableOpacity>
    </View>
  );
}

SelectedImageScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
