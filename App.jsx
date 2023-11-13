import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';

import AppBar from './src/components/AppBar';
import HomePage from './src/pages/HomePage';

export default function App() {
  return (
    <NativeBaseProvider>
      <AppBar />
      <View style={styles.container}>
        <HomePage />
      </View>
      <a style={{ margin: 10 }} />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEE2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
