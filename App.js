import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import Login from './app/screens/LoginScreen';
import MapScreen from './app/screens/MapScreen';

export default function App() {
  return (
    <MapScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
