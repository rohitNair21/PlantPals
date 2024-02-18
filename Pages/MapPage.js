import { brown } from '@mui/material/colors';
import { fontWeight } from '@mui/system';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import {PROVIDER_GOOGLE} from 'react-native-maps';

const calgary = {
  latitude: 51.0478,
  longitude: -114.0593,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const Listing = ({name, address}) => {
  return (
    <View style={styles.ListingContainer}>
      <Text style={{fontWeight:"bold"}}>{name}</Text>
      <Text>{address}</Text>    
    </View>
  )
}



export default function MapPage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding:10}}>
        <Text style={{fontWeight:"600", fontSize:25, color:"brown", marginBottom:10}}>Find gardens near you</Text>
        <Text style={{fontSize:13, fontWeight:"bold"}}>Check which areas around you might need some help</Text>
      </View>
      
      <MapView initialRegion={calgary}  style={styles.map} provider={PROVIDER_GOOGLE}/>
      
      <ScrollView style={styles.scrollContainer}>
        <Listing name="Garden 1" address="123 Boombaclaat Road SW"/>  
        <Listing name="Garden 2" address="123 Boombaclaat Road SW"/>  
        <Listing name="Garden 3" address="123 Boombaclaat Road SW"/>  
      </ScrollView>
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
  map: {
    flex: 2,
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  scrollContainer: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  ListingContainer: {
    margin: 10,
    padding: 15,
    height: 140,
    borderRadius: 25,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "brown",
  },
});
