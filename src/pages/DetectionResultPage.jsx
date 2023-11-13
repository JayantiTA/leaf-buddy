import { TouchableOpacity } from 'react-native';
import { Image, Box, Text } from 'native-base';

export default function DetectionResultPage() {
    return (
    <>
        <Text marginX={5} textAlign="center" maxWidth={350} fontSize={14}>
            Detection Result:
        </Text>
        <Text marginX={5} textAlign="center" color="#4B784A" fontWeight="bold" maxWidth={350} fontSize={16}>
            Normal (100%)
        </Text>
        <Box margin={5} bg="#FEFEE2" borderRadius={8}>
            <Image
                source={{
                    uri: 'https://www.bhg.com/thmb/EhLsmA6ULBkva4_GUpBTHhnd4Bc=/1024x0/filters:no_upscale():strip_icc()/Tomato-late-blight-72605cba08f2483aae0fd8f1dc3532a9.jpg',
                }}
                alt="Alternate Text"
                size="2xl"
                resizeMode="cover"
            />
        </Box>
        <TouchableOpacity
            style={{
            backgroundColor: '#4B784A',
            padding: 10,
            borderRadius: 8,
            margin: 5,
            minWidth: 300,
            alignItems: 'center',
            }}
        >
            <Text color="white" fontSize={13} fontWeight="semibold">Search on web browser</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
            backgroundColor: '#8E8D94',
            padding: 10,
            borderRadius: 8,
            margin: 5,
            minWidth: 300,
            alignItems: 'center',
            }}
        >
            <Text color="white" fontSize={13} fontWeight="semibold">Back to home</Text>
        </TouchableOpacity>
    </>
  );
}
