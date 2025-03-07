import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import ScreenStack from './src/navigation/stack/ScreenStack';

export default function App() {
  return (
    <NavigationContainer>
      <ScreenStack />
    </NavigationContainer>
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