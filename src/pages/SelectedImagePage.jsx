import { TouchableOpacity } from 'react-native';
import { Image, Box, Text, Icon, FormControl, Select } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function SelectedImagePage() {
    return (
    <>
        <Text marginX={5} textAlign="center" maxWidth={350} margin={3} fontSize={12}>
            Make sure the
            {" "}
            <a style={{ fontWeight: 'bold', color: '#4B784A' }}>problem</a>
            {" "}
            of the
            {" "}
            <a style={{ fontWeight: 'bold', color: '#4B784A' }}>plant's leaves</a>
            {" "}
            is clearly visible (eg: spots, color differences, etc.)
        </Text>
        <Box margin={2} bg="#FEFEE2" borderRadius={8}>
            <Image
                source={{
                    uri: 'https://www.bhg.com/thmb/EhLsmA6ULBkva4_GUpBTHhnd4Bc=/1024x0/filters:no_upscale():strip_icc()/Tomato-late-blight-72605cba08f2483aae0fd8f1dc3532a9.jpg',
                }}
                alt="Alternate Text"
                size="2xl"
                resizeMode="cover"
            />
        </Box>
        <FormControl w="3/4" maxW="300" margin={3} isRequired>
            <Select minWidth="200" accessibilityLabel="Choose Plant" placeholder="Choose Plant" _selectedItem={{
            bg: "teal.600",
            endIcon: <Icon size={5} as={<MaterialIcons name="check" />} />,
        }} mt="1">
            <Select.Item label="Pepper Bell" value="pepper_bell" />
            <Select.Item label="Potato" value="potato" />
            <Select.Item label="Tomato" value="tomato" />
            </Select>
            <FormControl.ErrorMessage leftIcon={<Icon size={5} as={<MaterialIcons name="error" />} />}>
                Please make a selection!
            </FormControl.ErrorMessage>
        </FormControl>
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
            <Text color="white" fontSize={13} fontWeight="semibold">Confirm</Text>
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
