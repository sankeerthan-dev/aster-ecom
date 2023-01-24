import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthContextProvider } from './context/AuthContext';
import BottomTabNav from './navigation/BottomTabNav';
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthContextProvider>
        <BottomTabNav />
        </AuthContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


