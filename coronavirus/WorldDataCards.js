import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ButtonGroup, ListItem, Header} from 'react-native-elements';
import ShadowCard from './ShadowCard';

function WorldDataCards({world}) {
  return (
    <>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          paddingTop: 10,
          fontSize: 20,
          color: 'black',
        }}>
        Global
      </Text>
      <ShadowCard>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: 10,
            fontSize: 20,
            color: 'white',
          }}>
          Total Confirm case
        </Text>
        <ListItem
          subtitle={world.cases}
          subtitleStyle={{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
          containerStyle={styles.container}
        />
      </ShadowCard>
      <View style={{flexDirection: 'row'}}>
        <ShadowCard>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              paddingTop: 10,
              fontSize: 20,
              color: 'white',
            }}>
            Today Case {'       '}
          </Text>
          <ListItem
            subtitle={world.todayCases}
            subtitleStyle={{
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
            containerStyle={styles.container}
          />
        </ShadowCard>
        <ShadowCard>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              paddingTop: 10,
              fontSize: 20,
              color: 'white',
            }}>
            {'     '} Today Death
          </Text>
          <ListItem
            subtitle={world.todayDeaths}
            subtitleStyle={{
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
            containerStyle={styles.container}
          />
        </ShadowCard>
      </View>
      <View style={{flexDirection: 'row'}}>
        <ShadowCard>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              paddingTop: 10,
              fontSize: 20,
              color: 'white',
            }}>
            Total Death {'        '}
          </Text>
          <ListItem
            subtitle={world.deaths}
            subtitleStyle={{
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
            containerStyle={styles.container}
          />
        </ShadowCard>
        <ShadowCard>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              paddingTop: 10,
              fontSize: 20,
              color: 'white',
            }}>
            Recovered {'        '}
          </Text>
          <ListItem
            subtitle={world.recovered}
            subtitleStyle={{
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
            }}
            containerStyle={styles.container}
          />
        </ShadowCard>
      </View>
      <View style={{flexDirection: 'row'}}>
        <ShadowCard>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              paddingTop: 10,
              fontSize: 20,
              color: 'white',
            }}>
            Active {'                   '}
          </Text>
          <ListItem
            subtitle={world.active}
            subtitleStyle={{
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
            containerStyle={styles.container}
          />
        </ShadowCard>
        <ShadowCard>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              paddingTop: 10,
              fontSize: 20,
              color: 'white',
            }}>
            Critical {'                '}
          </Text>
          <ListItem
            subtitle={world.critical}
            subtitleStyle={{
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
            containerStyle={styles.container}
          />
        </ShadowCard>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(56,161,240)',
  },
});
export default WorldDataCards;
