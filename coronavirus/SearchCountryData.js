import React, {useEffect, useState} from 'react';
import FetchCoronaData from './FetchCoronaData';
import {StyleSheet, FlatList, View} from 'react-native';
import CountryDataCard from './CountryDataCard';
import _ from 'lodash';
import {SearchBar} from 'react-native-elements';

const SearchCountryData = () => {
  const [dataName, setDataName] = useState([]);
  const [texts, setTexts] = useState('');
  const [arrayholders, setArrayholders] = useState([]);
  useEffect(() => {
    FetchCoronaData().then((data) => {
      setDataName(data);
    });
  }, []);
  useEffect(() => {
    FetchCoronaData().then((data) => {
      setArrayholders(data);
    });
  }, []);

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          borderColor: 'black',
          marginLeft: '14%',
        }}
      />
    );
  };

  // }

  const searchFilterFunction = (text) => {
    const newData = arrayholders.filter((item) => {
      const itemData = item.country
        ? item.country.toUpperCase()
        : ''.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setDataName(newData);
    setTexts(text);
  };

  return (
    <View style={{flex: 1}}>
      <SearchBar
        placeholder="Search..."
        lightTheme
        round
        onChangeText={(text) => searchFilterFunction(text)}
        autoCorrect={false}
        value={texts}
        containerStyle={{backgroundColor: 'rgb(66,103,178)'}}
        inputStyle={{color: 'black'}}
      />
      <FlatList
        data={dataName.sort((a, b) => a.country.localeCompare(b.country))}
        renderItem={({item}) => (
          <CountryDataCard key={item.country} data={item} />
        )}
        keyExtractor={(item) => item.country}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default SearchCountryData;
