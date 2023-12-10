import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEE2",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  cameraContainer: {
    width: 450,
    height: 450,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  captureButton: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#4B784A",
  },
  captureButtonText: {
    fontSize: 18,
    color: "black",
  },
  modalView: {
    margin: 10,
    backgroundColor: "#FEFEEE",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    maxWidth: "90%",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    marginTop: 20,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "80%",
    backgroundColor: "#9C953D",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
    minHeight: "100%",
  },
});

export default styles;
