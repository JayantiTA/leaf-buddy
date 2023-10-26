import React from 'react';
import { StatusBar, Icon, Box, IconButton, Text, HStack } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function AppBar() {
  return <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop />
      <HStack bg="#7FC37E" px="1" py="2" justifyContent="center" w="100%">
        <HStack maxW="350" justifyContent="space-between" alignItems="center" w="100%">
          <Text color="white" ml="5" fontSize="16" fontWeight="bold">
            PLANT BUDDY
          </Text>
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="lg" color="white" />} />
        </HStack>
      </HStack>
    </>;
}

export default AppBar;
