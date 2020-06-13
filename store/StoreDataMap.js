import React, {useEffect, useState} from 'react';
import FetchStoreData from './FetchStoreData';
import _ from 'lodash';
// import { useScrollToTop } from '@react-navigation/native';
import {ScrollView, Text, View} from 'react-native';
import StoreCards from './StoreCards';
import {SearchBar, Button} from 'react-native-elements';

const StoreDataMap = () => {
  const [dataStore, setDataStore] = useState([]);
  const [search, setSearch] = useState('');
  const [arrayholders, setArrayholders] = useState([]);
  // const ref = React.useRef(null);
  // useScrollToTop(ref);
  useEffect(() => {
    FetchStoreData().then((data) => {
      setDataStore(data);
    });
  }, []);

  useEffect(() => {
    FetchStoreData().then((data) => {
      setArrayholders(data);
    });
  }, []);

  const SearchStoreFilter = (text) => {
    const textData = text.toUpperCase();

    const newData = arrayholders.filter((item) => {
      return (
        item.name.toUpperCase().includes(textData) ||
        item.city.toUpperCase().includes(textData) ||
        item.state.toUpperCase().includes(textData) ||
        item.zip_code.includes(textData) ||
        item.street.toUpperCase().includes(textData) ||
        item.category.toUpperCase().includes(textData)
      );
    });
    setDataStore(newData);
    setSearch(text);
  };
  return (
    <View style={{flex: 1, marginTop: -12}}>
      <SearchBar
        platform={'ios'}
        placeholder="Type Here..."
        value={search}
        onChangeText={(text) => SearchStoreFilter(text)}
        returnKeyType={'search'}
      />

      <ScrollView>
        {_.map(dataStore, (item) => (
          <StoreCards key={item.id} storeData={item} />
        ))}
      </ScrollView>
    </View>
  );
};
export default StoreDataMap;
