import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNav from './navigation/BottomTabNav';
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


