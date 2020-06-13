import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Button, Icon} from 'react-native-elements';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import VirusDataHomeScreen from '../coronavirus/VirusDataHomeScreen';
import SearchCountryData from '../coronavirus/SearchCountryData';
import FetchWorldData from '../coronavirus/FetchWorldData';
import CitizenLearn from '../learn/CitizenLearn';
import LookUpDetailsScreen from '../YoutubeTrending/LookUpDetailsScreen';
import SearchScreen from '../YoutubeTrending/SearchScreen';
import LearnHomeScreen from '../learn/LearnHomeScreen';
import StoreDataMap from '../store/StoreDataMap';

const HomeStack = createStackNavigator();

function HomeScreenVirus() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={VirusDataHomeScreen} />
    </HomeStack.Navigator>
  );
}
const VirusStack = createStackNavigator();

function VirusScreens() {
  return (
    <VirusStack.Navigator>
      <VirusStack.Screen name="Home" component={VirusDataHomeScreen} />
      <VirusStack.Screen name="Virus" component={SearchCountryData} />
      <VirusStack.Screen name="World" component={FetchWorldData} />
    </VirusStack.Navigator>
  );
}
const LearnStack = createStackNavigator();

function LearnScreens() {
  return (
    <LearnStack.Navigator>
        <LearnStack.Screen name="Learn" component={LearnHomeScreen} />
      <LearnStack.Screen name="Citizen" component={CitizenLearn} />
    </LearnStack.Navigator>
  );
}
const SearchStoreStack = createStackNavigator();

function SearchStore() {
  return (
    <SearchStoreStack.Navigator>
      <SearchStoreStack.Screen name="store" component={StoreDataMap} />
    </SearchStoreStack.Navigator>
  );
}
const YoutubeStack = createStackNavigator();

function YoutubeScreens() {
  return (
    <YoutubeStack.Navigator>
      <YoutubeStack.Screen name="Trending" component={SearchScreen} />
      <YoutubeStack.Screen name="Look" component={LookUpDetailsScreen} />
    </YoutubeStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let types = 'material-community';
          if (route.name === 'Virus') {
            iconName = 'mine';
            // <Icon name="heartbeat" type="font-awesome" />;
          }
          if (route.name === 'Learn') {
            iconName = 'book';
          }
          if (route.name === 'Trending') {
            iconName = 'youtube';
          }
          if (route.name === 'store') {
            iconName = 'magnify';
          }

          return (
            <Icon type={types} name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      {/*<Tab.Screen name="Home" component={HomeScreenVirus} />*/}
      <Tab.Screen name="Virus" component={VirusScreens} />
      <Tab.Screen name="Learn" component={LearnScreens} />
      <Tab.Screen name="Trending" component={YoutubeScreens} />
      <Tab.Screen name="store" component={SearchStore} />
    </Tab.Navigator>
  );
};
export default Tabs;
