import { TouchableOpacity, View } from 'react-native';
import { Box, Text } from 'native-base';
import { Camera } from 'expo-camera';
import React, { useRef, useState, useEffect } from 'react';

import useStore from '../store/store';
import styles from '../styles/style';

export default function StartCameraScreen({ navigation }) {
    const cameraRef = useRef(null);
    const { setSelectedImage, selectedImage } = useStore();
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            setSelectedImage(photo.uri);
            navigation.navigate('SelectedImage');
        }
    };
        
    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
    <View style={styles.container}>
        <Text marginX={5} textAlign="center" maxWidth={350} margin={3} fontSize={14}>
            Make sure the
            {" "}
            <Text fontWeight='bold' color='#4B784A'>problem</Text>
            {" "}
            of the
            {" "}
            <Text fontWeight='bold' color='#4B784A'>plant's leaves</Text>
            {" "}
            is clearly visible (eg: spots, color differences, etc.)
        </Text>
        <Box margin={5} bg="#FEFEE2" borderRadius={8}>
            <View>
                <Camera
                    type={Camera.Constants.Type.back}
                    ref={cameraRef}
                    ratio='4:3'
                >
                    <View style={styles.cameraContainer}>
                        <TouchableOpacity
                            style={styles.captureButton}
                            onPress={takePicture}
                        >
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
        </Box>
        <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
                backgroundColor: '#8E8D94',
                padding: 10,
                borderRadius: 8,
                margin: 5,
                minWidth: 300,
                alignItems: 'center',
            }}
        >
            <Text color="white" fontSize="md" fontWeight="semibold">Back to home</Text>
        </TouchableOpacity>
    </View>
  );
}
