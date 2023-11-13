import { TouchableOpacity } from 'react-native';
import { Image, Box, Text, Icon } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function HomePage() {
    return (
    <>
        <Box bg="#9C953D" rounded="full" paddingX="2.5" paddingY="1.5">
            <Text color="white">Start checking your leaves</Text>
        </Box>
        <Image source={require("/assets/plant-character.png")} alt="Cute Plant" size="xl" width={300} height={270}/>
        <TouchableOpacity
            style={{
            backgroundColor: '#4B784A',
            padding: 10,
            borderRadius: 8,
            margin: 5,
            minWidth: 250,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}
        >
            <Text color="white" fontSize={15}>Take a picture</Text>
            <Icon as={MaterialIcons} name="camera-alt" size="lg" color="white" />
        </TouchableOpacity>
        <TouchableOpacity
            style={{
            backgroundColor: '#4B784A',
            padding: 10,
            borderRadius: 8,
            margin: 5,
            minWidth: 250,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}
        >
            <Text color="white" fontSize={15}>Pick from gallery</Text>
            <Icon as={MaterialIcons} name="photo-library" size="lg" color="white" />
        </TouchableOpacity>
    </>
  );
}
