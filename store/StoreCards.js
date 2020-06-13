import React, {useState} from 'react';
import {Card, ListItem, Image, Avatar, Icon} from 'react-native-elements';
import {Text, TouchableOpacity, View, Animated, Dimensions} from 'react-native';
import StoreShadowCard from './StoreShadowCard';
import {round} from 'react-native-reanimated';
import Modal from 'react-native-modal';
import MapCoordinates from './FetchCoordinates';
const StoreCards = ({storeData}) => {
  const [visibles, setVisibles] = useState(false);

  const StoreImage = () => {
    return (
      <Avatar
        source={{uri: storeData.url}}
        // size="large"
        size={100}
        avatarStyle={styles.shadow(round)}
        v
      />
    );
  };
  return (
    <StoreShadowCard rounded key={storeData.id}>
      <Modal
        visible={visibles}
        animated
        animationType={'slide'}
        onSwipeComplete={() => setVisibles(false)}
        swipeDirection="down"

        transparent={true}>
        <View style={styles.modal}>
          <MapCoordinates />
        </View>
      </Modal>

      <ListItem
        title={storeData.name}
        titleStyle={{
          paddingBottom: 130,
          marginTop: -70,
          marginBottom: -125,
          fontWeight: 'bold',
          fontSize: 15,
        }}
        subtitle={storeData.street}
        leftAvatar={StoreImage}
      />
      <ListItem
        subtitle={`${storeData.city}, ${storeData.state} ${storeData.zip_code}`}
        subtitleStyle={{paddingLeft: 118, marginBottom: -70, marginTop: -105}}
      />
      <View style={{paddingLeft: 140, marginBottom: 5, marginTop: -40}}>
        <TouchableOpacity onPress={() => setVisibles(!visibles)}>
          <Image
            style={{width: 50, height: 50}}
            source={require('/Users/bikramsubedi/Desktop/nep_app/store/directions_icon.png')}
          />
        </TouchableOpacity>
      </View>
    </StoreShadowCard>
  );
};

const styles = {
  shadow: (rounded) => ({
    borderRadius: rounded ? 15 : undefined,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  }),


  modal: {
    justifyContent: 'flex-end',
    // alignItems: 'center',
    // backgroundColor: "#00BCD4",
    // backgroundColor: 'rgba(0,0,0,0.2)',
    backgroundColor: '#fff',

    height: 170,
    width: Dimensions.get('window').width,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 780,
    marginLeft: -20,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowColor: '#000',
  },
};

export default StoreCards;
