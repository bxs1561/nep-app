import React from 'react';
import axios from 'axios';
import {Text, ScrollView, Avatar, SearchBar} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import ShadowCard from './ShadowCard';
import {Card, ListItem, Button} from 'react-native-elements';

const CountryDataCard = ({data}) => {
  return (
    <ShadowCard
      title={
        <View style={{lex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
              paddingBottom: 10,
            }}>
            {data.country}
          </Text>
        </View>
      }>
      <ListItem
        leftAvatar={{source: {uri: data.flag}}}
        title={'Total Confirmed Cases'}
        subtitle={data.cases}
        titleStyle={{color: 'black', fontWeight: 'bold'}}
        subtitleStyle={{color: 'black', fontWeight: 'bold'}}
      />

      <View style={{flexDirection: 'row'}}>
        <Card
          title="Today Cases"
          style={{flex: 1}}
          containerStyle={styles.todayCard}>
          <ListItem
            containerStyle={styles.todayCard}
            titleStyle={{color: 'black', fontWeight: 'bold'}}
            subtitleStyle={{color: 'black', fontWeight: 'bold'}}
            subtitle={data.todayCases}
          />
        </Card>
        <Card title="Today Death" containerStyle={styles.todayCard}>
          <ListItem
            containerStyle={styles.todayCard}
            subtitle={data.todayDeaths}
            subtitleStyle={{color: 'black', fontWeight: 'bold'}}
          />
        </Card>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Card title="Total Deaths" containerStyle={styles.todayCard}>
          <ListItem
            containerStyle={styles.todayCard}
            subtitle={data.deaths}
            subtitleStyle={{color: 'black', fontWeight: 'bold'}}
          />
        </Card>
        <Card title="Recovered    " containerStyle={styles.todayCard}>
          <ListItem
            containerStyle={styles.todayCard}
            subtitle={data.recovered}
            subtitleStyle={{color: 'black', fontWeight: 'bold'}}
          />
        </Card>
      </View>
      <Text style={{padding: 5, margin: 5, fontWeight: 'bold', fontSize: 20}}>
        Active: {data.active}
        {'      '}
        <Text style={{padding: 5, margin: 5, fontWeight: 'bold', fontSize: 20}}>
          Critical: {data.critical}
        </Text>
      </Text>
    </ShadowCard>
  );
};

const styles = StyleSheet.create({
  todayCard: {
    flex: 1,
    // backgroundColor: '#9FA8DA',
    //   backgroundColor: 'rgb(0,119,181)',
    //   backgroundColor: 'white',
    // borderColor: 'white'
    // lightsteelblue
  },
});

export default CountryDataCard;
