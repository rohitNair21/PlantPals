import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import {PROVIDER_GOOGLE} from 'react-native-maps';

const calgary = {
  latitude: 51.0478,
  longitude: 114.0593
}

export default function App() {
  return (
    <View style={styles.container}>
      <MapView initialRegion={calgary}  style={styles.map} provider={PROVIDER_GOOGLE}/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
