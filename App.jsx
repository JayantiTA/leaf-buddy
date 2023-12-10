import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppBar from "./src/components/AppBar";
import DetectionResultScreen from "./src/screens/DetectionResultScreen";
import HomeScreen from "./src/screens/HomeScreen";
import StartCameraScreen from "./src/screens/StartCameraScreen";
import SelectedImageScreen from "./src/screens/SelectedImageScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ 
            header: props => <AppBar navigation={props.navigation} />, 
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="StartCamera" component={StartCameraScreen} />
          <Stack.Screen name="SelectedImage" component={SelectedImageScreen} />
          <Stack.Screen name="DetectionResult" component={DetectionResultScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
