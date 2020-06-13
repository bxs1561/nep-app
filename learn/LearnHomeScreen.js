import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const LearnHomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.buttonStyle}
        buttonStyle={{backgroundColor: 'rgb( 66,103,178)', borderRadius: 30}}
        title="Learn Citizen"
        onPress={() => navigation.navigate('Citizen')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0,119,181)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: 10,
    width: 300,
  },
});
export default LearnHomeScreen;
