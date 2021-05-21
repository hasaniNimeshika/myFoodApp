import React from 'react';
import {Text, Button, View, StyleSheet, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Swiper from 'react-native-swiper';

const ExploreScreen = ({navigation}) =>{
    return(
      <View>
     <MapView
     provider={PROVIDER_GOOGLE}// remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     <Marker
     coordinate={{
      latitude: 37.78825,
         longitude: -122.4324,
     }}
     image={require('../assets/map_marker.png')}

     >
      <Callout tooltip>
       <View>
         <View>
           <Text>Favourite Restaurant</Text>
         </View>
         <Image
           style={styles.image}
           source={require('../assets/banners/food-banner1.jpg')}
         />
       </View>

      </Callout>
     </Marker> 
     </MapView>
   </View>

  
    );
  };

  export default ExploreScreen;

  const styles = StyleSheet.create({
    map: {
      height:'100%',
    },
    image:{
      width:120,
      height:80,
    }
  });