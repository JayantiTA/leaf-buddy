import React, { useState } from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { Image, Box, Text, Icon, Select, useToast } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import PropTypes from "prop-types";
import axios from "axios";

import useStore from "../store/store";
import styles from "../styles/style";
import ToastAlert from "../components/toast/ToastAlert";
import CustomModal from "../components/modal/CustomModal";

export default function SelectedImageScreen({ navigation }) {
  const { selectedImage, imageBase64, setDetectionResult, setConfidence, plantName, setPlantName } = useStore();
  const [showToast, setShowToast] = useState(false);
  const [title, setTitle] = useState("");
  const toast = useToast();
  const [modalVisible, setModalVisible] = useState(false);

  const predict = async () => {
    if (plantName === "") {
      showErrorToast("Plant's name is required!");
      return;
    }

    setModalVisible(true);

    try {
      const response = await axios.post("https://jayantita.pythonanywhere.com/classify", {
        image: imageBase64,
        plant: plantName,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { data }  = response;
      setDetectionResult(data.class_name);
      setConfidence(data.confidence);
      setModalVisible(false);
      navigation.navigate("DetectionResult");
    } catch (error) {
      console.error(error);
      setModalVisible(false);
      showErrorToast(error.message);
    }
  };

  const showErrorToast = (title) => {
    setTitle(title);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setTitle("");
    }, 3000);
  }; 

  const hideToast = () => {
    toast.closeAll();
    setShowToast(false);
    setTitle("");
  };

  const handleValueChange = (value) => {
    setPlantName(value);
  };

  return (
    <View style={styles.container}>
      {showToast ? <ToastAlert title={title} hideToast={hideToast} /> : null}
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
      <Box margin={8} borderRadius={8}>
        <Image
          source={{
            uri: selectedImage,
          }}
          alt="Alternate Text"
          size="2xl"
          resizeMode="cover"
        />
      </Box>
      <Select margin={5} width="80%" alignItems="center" accessibilityLabel="Choose Plant" placeholder="Choose Plant" fontSize="md" _selectedItem={{
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
        style={[styles.button, styles.greenButton]}
      >
        <Text color="white" fontSize="lg">Confirm</Text>
      </TouchableOpacity>
      <CustomModal
        isVisible={modalVisible}
      >
        <ActivityIndicator size="large" color="#4B784A"/>
        <Text fontSize={15} marginTop={3} textAlign="center">Please wait, your result is being processed</Text>
      </CustomModal>
    </View>
  );
}

SelectedImageScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
