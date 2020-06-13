import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchCountryData from './SearchCountryData';
import {Button, Icon} from 'react-native-elements';

const VirusDataHomeScreen = ({navigation}) => {
  navigation.setOptions({
    title: 'Viruses',
  });

  return (
    <View style={styles.container}>
      <Button
        title="Country"
        style={styles.buttonStyle}
        buttonStyle={{borderRadius: 30}}
        icon={<Icon name="flag" type="material-community"/>}
        iconLeft
        onPress={() => navigation.navigate('Virus')}
      />
      <Button
          title="World"
          style={styles.buttonStyle}
          buttonStyle={{borderRadius: 30}}
          icon={<Icon name="earth" type="material-community"/>}
          iconLeft
          onPress={() => navigation.navigate('World')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(66,103,178)',
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: 10,
    width: 300,
  },
});

export default VirusDataHomeScreen;
