import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const Map = ({data}) => {
  // const LONGITUDE_DELTA = 0.0925;
  const LATITUDE = data.lat;
  const LONGITUDE = data.long;
  const[map, setMap] = useState([])

  const Dir = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        // Create the object to update this.state.mapRegion through the onRegionChange function
        console.log(position.coords.longitude);
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.00922 * 1.5,
          longitudeDelta: 0.00421 * 1.5,
        };
      },
      (error) => console.log(error),
    );
  };

  const Maps = () => {
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const latLng = `${LATITUDE},${LONGITUDE}`;
    const label = 'Custom Label';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });
    Linking.openURL(url);
    //   var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    //   var url = scheme + `${lat},${lng}`;
    //   Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={Maps}>
        <Button
          title="press me"
          style={{flex: 1, justifyContent: 'flex-start', paddingTop: 15}}
          onPress={Maps}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  calloutView: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    width: '40%',
    marginLeft: '30%',
    marginRight: '30%',
    marginTop: 20,
  },
  calloutSearch: {
    borderColor: 'transparent',
    marginLeft: 10,
    width: '90%',
    marginRight: 10,
    height: 40,
    borderWidth: 0.0,
  },
});

export default Map;
