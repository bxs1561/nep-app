import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  ScrollView,
  View,
  TextInput,
  Alert,
  Dimensions,
} from 'react-native';
import LookUpCountry from './LookUpCountry';
import {Button, SearchBar} from 'react-native-elements';

const SearchScreen = ({navigation}) => {
  const [search, setSearch] = useState('');

  const handleChange = (value) => {
    setSearch(value);
  };
  navigation.setOptions({
    title: 'Search',
  });

  const Search = () => {
    LookUpCountry(search)
      .then((response) => {
        navigation.navigate('Look', {item: response.data.data});
      })
      .catch(() => {
        Alert.alert('wrong input', 'please enter correct input', ['ok']);
      });
  };

  return (
    <ScrollView>
      <View style={{paddingTop: 0}}>
        <SearchBar
            platform={'ios'}
            placeholder="Country abbrevation..."
            value={search}
            onChangeText={handleChange}
            onSubmitEditing={Search}
            autoCorrect={false}
        />


      </View>
    </ScrollView>
  );
};
export default SearchScreen;

