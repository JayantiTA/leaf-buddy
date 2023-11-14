import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEE2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  cameraContainer: {
        width: 450,
        height: 450,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    captureButton: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 5,
        borderColor: '#4B784A',
    },
    captureButtonText: {
        fontSize: 18,
        color: 'black',
    },
});

export default styles;