import React from "react";
import { Modal, View } from "react-native";

import styles from "../../styles/style";

export default function CustomModal({ isVisible, children }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}>
      <View style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", minWidth: "100%", minHeight: "100%"  }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            { children }
          </View>
        </View>
      </View>
    </Modal>
  );
}
