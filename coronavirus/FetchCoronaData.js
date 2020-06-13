import React from 'react';
import axios from 'axios';


const FetchCoronaData = async () => {
  return await axios
    .get('https://coronav-ap.herokuapp.com/country')
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return [];
    });
};
export default FetchCoronaData;
