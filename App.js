import { brown } from '@mui/material/colors';
import { fontWeight, width } from '@mui/system';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapPage from './Pages/MapPage';

export default function App() {
  return (
    <SafeAreaView style={{width:"100%", height:"100%"}}>
      <MapPage/>
    </SafeAreaView>
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
