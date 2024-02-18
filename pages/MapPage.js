
import { brown } from '@mui/material/colors';
import { fontWeight, width } from '@mui/system';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, Modal } from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';
import {PROVIDER_GOOGLE} from 'react-native-maps';
import { reverseGeocodeAsync } from 'expo-location';
import Checkbox from 'expo-checkbox';
import { Button } from 'react-native-elements';
import {
  Appbar,
  Card,
  Title,
  Paragraph,
  Avatar,
} from "react-native-paper";



const calgary = {
  latitude: 51.0478,
  longitude: -114.0593,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const Listing = ({name, address}) => {
  return (
    <View style={styles.ListingContainer}>
      <Pressable
        style={{flex:1}}
        onPress={() => {setModal(name,address); setVisible(true)}}
      >
        <Text style={{fontWeight:"bold"}}>{name}</Text>
        <Text>{address}</Text>    
      </Pressable>
    </View>
  )
}

const setModal = (name, address) => {
  setName(name);
  setAddress(address);
}

export default function MapPage() {
    [gardens, setGardens] = useState([]);
    [isLoading, setLoading] = useState(true);
    [modalVisible, setVisible] = useState(false);
    [gardenIndex, setIndex] = useState(0);
    [gardenName, setName] = useState();
    [gardenAddress, setAddress] = useState();

    [isWatered, setWatered] = useState(false);
    [isRaked, setRaked] = useState(false);
    [isPruned, setPruned] = useState(false);


    const query ="https://data.calgary.ca/resource/kami-qbfh.json?$query=SELECT%0A%20%20%60site_name%60%2C%0A%20%20%60the_geom%60%2C%0A%20%20%60planning_category%60%2C%0A%20%20%60asset_type%60%2C%0A%20%20%60type_description%60%2C%0A%20%20%60minortype%60%2C%0A%20%20%60cultural_landscape%60%2C%0A%20%20%60asset_class%60%2C%0A%20%20%60asset_cd%60%2C%0A%20%20%60location_detail%60%2C%0A%20%20%60steward%60%2C%0A%20%20%60maintained_by%60%2C%0A%20%20%60maint_info%60%2C%0A%20%20%60life_cycle_status%60%0AWHERE%0A%20%20caseless_one_of(%0A%20%20%20%20%60maint_info%60%2C%0A%20%20%20%20%22COMMUNITY%20GARDEN%20IS%20MUNICIPALLY%20APPROVED%20HERITAGE%20SITE%22%0A%20%20)"; 

    //  { gardens.map((g, index) => <Polygon key={index} coordinates={g.the_geom.coordinates[0][0].map((coords) => {coords[0], coords[1]})}/>)}
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(query, {method:"GET", headers:{'X-App-Token':"btuIRgXPKkPuQmgec7uiwz8IJ"}});
                const data = await res.json();
                let arr = [];
                
                for(var i = 0; i < data.length; i++) {
                  const g = data[i];
                  const pos = {latitude: g.the_geom.coordinates[0][0][i][1], longitude: g.the_geom.coordinates[0][0][0][0]};
                  const addr = await reverseGeocodeAsync(pos);
                  arr[i] = {name:g.site_name, pos: pos,address: addr[0].name};
                }
                
                
                console.log(arr);
          
                setGardens(arr);
                setLoading(false);
            
            }
            catch (e) {console.log(e)}
        }
       
        fetchData();
        
        
        },[]
    );

    while (isLoading) return (
        <View style={{justifyContent:'center'}}>
            <ActivityIndicator/>
        </View>
    )
   
    return (
    <SafeAreaView style={styles.container}>
        <View style={{width:"100%", height:"100%"}}>
            <View style={{padding:10}}>
                <Text style={{fontWeight:"600", fontSize:25, color:"brown", marginBottom:10}}>Find gardens near you</Text>
                <Text style={{fontSize:13, fontWeight:"bold"}}>Check which areas around you might need some help</Text>
            </View>
            
            <MapView initialRegion={calgary}  style={styles.map} provider={PROVIDER_GOOGLE}>
                {gardens.map((g, index) => <Marker key={index} coordinate={g.pos}/>)}
            </MapView>
            
            <ScrollView style={styles.scrollContainer}>
                {gardens.map((g, index) => <Listing name={g.name} address={g.address} key={index} />)}
        
            </ScrollView>
        </View>
        <Modal 
            visible={modalVisible}
            animationType="slide"
        >
            <SafeAreaView style={{flex:1, alignItems:'center'}}>
                <View style={{flex:1, justifyContent:'center'}}>
                  <Text style={{fontWeight:"bold", fontSize:"20", }}>{gardenName}</Text>
                  <Text>{gardenAddress}</Text>
                </View>
                <View style={{flex:5, width:'90%' }}>
                  
                  
                  <Card style={styles.card}  onPress={() => setWatered(!isWatered)}>
                    <Card.Content >
                      <Title style={styles.title}>{gardenName}</Title>
                      <Paragraph style={styles.cardText}>
                        <Checkbox value={isWatered}/>
                        <Text style={{fontSize:'25', }}>Water The Garden</Text>
                      </Paragraph>
                    </Card.Content>
                  </Card>

                  <Card style={styles.card} onPress={() => setRaked(!isRaked)}>
                    <Card.Content>
                      <Title style={styles.title}>{gardenName}</Title>
                      <Paragraph>
                          <Checkbox value={isRaked}/>
                          <Text style={{fontSize:'25'}}>Rake The Leaves</Text>
                      </Paragraph>
                    </Card.Content>
                  </Card>

                  <Card style={styles.card} onPress={() => setPruned(!isPruned)}>
                    <Card.Content >
                      <Title style={styles.title}>{gardenName}</Title>
                      <Paragraph style={styles.cardText}>
                            <Checkbox value={isPruned}/>
                            <Text style={{fontSize:'25', }}>Prune The Branches</Text>
                      </Paragraph>
                    </Card.Content>
                  </Card>
                </View>
                
                 <Button
                title="Close"
                buttonStyle={styles.loginButton}
                onPress={()=> setVisible(false)}
                />

            </SafeAreaView>
            

        </Modal>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
 
  card: {
    marginTop: 10,
    height: 150,
    backgroundColor: "#EDFAD8",
  },
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
    flex: 1,
    margin: 10,
    padding: 15,
    height: 140,
    borderRadius: 25,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "brown",


  },

    checkContainer: {
    flex: 1,
    margin: 5,
    padding: 15,
    height: '50',
    width:'100',
    borderRadius: 25,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "brown",
    flexDirection: 'row',
  },

  loginButton: {
    zIndex: 1,
    backgroundColor: "#1E8523",
    borderRadius: 25,
    paddingVertical: 12,
    width: "100%",
    marginTop: 10,
  },
});
