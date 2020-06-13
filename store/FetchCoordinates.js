import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ScrollView} from 'react-native';
import _ from 'lodash';
import Map from './Map';
const FetchCoordinates = async () => {
  return await axios
    .get('https://nepali-stores.herokuapp.com/api/v1/location')
    .then((result) => {
      return result.data;
    })
    .catch(() => {
      return [];
    });
};


function MapCoordinates() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    FetchCoordinates().then((data) => {
      setDatas(data);
    });
  }, []);

  return (
    <ScrollView>
      {_.map(datas, (items) => (
        <Map key={items.id} data={items.coordinates} />
      ))}
    </ScrollView>
  );
};

export default MapCoordinates;
