import React, {useEffect, useState} from 'react';
import axios from 'axios';
import WorldDataCards from './WorldDataCards';
import _ from 'lodash';
import {FlatList, View} from 'react-native';

const FetchWorldData = () => {
  const [dataName, setData] = useState([]);
  axios
    .get('https://coronav-ap.herokuapp.com/all')
    .then((res) => {
      setData(res.data);
    })
    .catch(() => {
      return [];
    });
  return (
    <FlatList
      data={dataName}
      renderItem={({item}) => (
        <WorldDataCards key={item.country} world={item} />
      )}
      keyExtractor={(item) => item.country}
    />
  );
};

export default FetchWorldData;
