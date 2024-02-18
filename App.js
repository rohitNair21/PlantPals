import { brown } from '@mui/material/colors';
import { fontWeight, width } from '@mui/system';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapPage from './pages/MapPage';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Nav from './components/Nav';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Nav'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Nav" component={Nav} />
        <Tab.Screen name="Home" component={MapPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    margin: 25,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
