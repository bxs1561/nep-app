import React from 'react';
import {ScrollView} from 'react-native';
import LookUpCard from './LookUpCard';
import _ from 'lodash';
export default function LookUpDetailsScreen({route, navigation}) {
  const {item} = route.params;
  navigation.setOptions({
    title: 'result',
    headerBackTitle: 'Back',
  });
  return (
    <ScrollView>
      {_.map(item, (it) => (
        <LookUpCard item={it} key={it.order} />
      ))}
    </ScrollView>
  );
}
