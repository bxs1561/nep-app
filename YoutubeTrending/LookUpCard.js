import React, {useState} from 'react';
import {
  Modal,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Icon, Overlay, Image, ListItem} from 'react-native-elements';
import {WebView} from 'react-native-webview';
import ShadowCard from '../coronavirus/ShadowCard';

const LookUpCard = ({item}) => {
  const [visibles, setVisibles] = useState(false);
  return (
    <View style={styles.container}>
      <Modal visible={visibles} animationType={'slide'} transparent={false}>
        <Icon
          name={'arrow-left'}
          size={47}
          type={'font-awesome'}
          color="grey"
          iconStyle={styles.arrow}
          onPress={() => setVisibles(!visibles)}
        />
        <View
          style={{
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
          }}>
          <WebView
            // style={{flex:1}}
            mediaPlaybackRequiresUserAction={true}
            scalesPageToFit={false}
            source={{uri: item.page}}
          />
        </View>
      </Modal>

      <ShadowCard>
        <ListItem
          // Component={TouchableScale}
          friction={90}
          tension={100}
          activeScale={0.95}
          titleStyle={{paddingTop: 10}}
          title={
            <TouchableOpacity
              onPress={() => {
                setVisibles(true);
              }}>
              <Image
                source={{uri: item.cover_art}}
                style={{width: 330, height: 170}}
              />
            </TouchableOpacity>
          }
          subtitle={item.title}
          subtitleStyle={{paddingTop: 20}}
        />
      </ShadowCard>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    // paddingLeft:0,
  },
  arrow: {
    marginTop: 35,
    marginRight: 300,
  },
});

export default LookUpCard;
