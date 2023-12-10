import React, { useState } from "react";
import { StatusBar, Icon, Box, IconButton, Text, HStack } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Modal, Pressable, View } from "react-native";

import styles from "../styles/style";

export default function AppBar({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop />
      <HStack bg="#7FC37E" px="1" py="3" justifyContent="center" w="100%">
        {
          navigation.canGoBack() &&
          <IconButton icon={<Icon as={MaterialIcons} name="chevron-left" size="lg" color="white" />} onPress={() => navigation.goBack()} />
        }
        <HStack maxW="90%" justifyContent="space-between" alignItems="center" w="100%">
          <Text color="white" ml="3" fontSize="xl" fontWeight="bold">
            LEAF BUDDY
          </Text>
          <IconButton
            icon={<Icon as={MaterialIcons} name="info-outline" size="lg" color="white" />}
            onPress={() => setModalVisible(true)}
          />
        </HStack>
      </HStack>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", minWidth: "100%", minHeight: "100%"  }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text fontWeight='semibold' fontSize={15}>Welcome to</Text>
              <Text fontWeight='bold' fontSize={18} color='#4B784A'>LEAF BUDDY</Text>
              <Text textAlign="center">Start analyzing now and find problems with your plant leaves!</Text>
              <Pressable
                style={styles.modalButton}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
