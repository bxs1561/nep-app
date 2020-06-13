import React from 'react';
import axios from 'axios';
const FetchStoreData = async () => {
  return await axios
    .get('https://nepali-stores.herokuapp.com/api/v1/location')
    .then((result) => {
      return result.data;
    })
    .catch(() => {
      return [];
    });
};


export default FetchStoreData;
