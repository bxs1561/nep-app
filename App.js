import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './Tab/Tabs';
import React from 'react';
const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>

  );
};

export default App;
