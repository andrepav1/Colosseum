import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';

import ExploreScreen from '../screens/ExploreScreen';
import MovieScreen from '../screens/MovieScreen';
import TVShowScreen from '../screens/TVShowScreen';
import SeasonScreen from '../screens/SeasonScreen';
import MultipleMoviesScreen from '../screens/MultipleMoviesScreen';
import PersonScreen from '../screens/PersonScreen';

import Color from '../constants/Colors'

const Tab = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Discover';

import {connect} from 'react-redux';

function ExploreNavigator({ navigation, darkMode }) {

  return (
    <Tab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: null,
          headerShown: true, 
          headerStyle: {
            backgroundColor: darkMode?Color.darkHeaderColor:Color.lightHeaderColor,
            elevation: darkMode?0:8, // remove shadow on Android
            shadowOpacity: darkMode?0:0.2, // remove shadow on iOS
          },
        }}
      />
      <Tab.Screen
        name="MovieScreen"
        component={MovieScreen}
        options={{
          title: null,
          headerShown: true, 
          headerStyle: {
            backgroundColor: darkMode?Color.darkHeaderColor:Color.lightHeaderColor,
            elevation: darkMode?0:8, // remove shadow on Android
            shadowOpacity: darkMode?0:0.2, // remove shadow on iOS
          },
        }}
      />
      <Tab.Screen
        name="MultipleMoviesScreen"
        component={MultipleMoviesScreen}
        options={{
          title: null,
          headerShown: true, 
          headerStyle: {
            backgroundColor: darkMode?Color.darkHeaderColor:Color.lightHeaderColor,
            elevation: darkMode?0:8, // remove shadow on Android
            shadowOpacity: darkMode?0:0.2, // remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: 'montserrat-semi-bold',
          },
        }}
      />
      <Tab.Screen
        name="PersonScreen"
        component={PersonScreen}
        options={{
          title: null,
          headerShown: true, 
          headerStyle: {
            backgroundColor: darkMode?Color.darkHeaderColor:Color.lightHeaderColor,
            elevation: darkMode?0:8, // remove shadow on Android
            shadowOpacity: darkMode?0:0.2, // remove shadow on iOS
          },
        }}
      />
      <Tab.Screen
        name="TVShowScreen"
        component={TVShowScreen}
        options={{
          title: null,
          headerShown: true, 
          headerStyle: {
            backgroundColor: darkMode?Color.darkHeaderColor:Color.lightHeaderColor,
            elevation: darkMode?0:8, // remove shadow on Android
            shadowOpacity: darkMode?0:0.2, // remove shadow on iOS
          },
        }}
      />
      <Tab.Screen
        name="SeasonScreen"
        component={SeasonScreen}
        options={{
          title: null,
          headerShown: true, 
          headerStyle: {
            backgroundColor: darkMode?Color.darkHeaderColor:Color.lightHeaderColor,
            elevation: darkMode?0:8, // remove shadow on Android
            shadowOpacity: darkMode?0:0.2, // remove shadow on iOS
          },
        }}
      />
    </Tab.Navigator>
  );
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.GlobalSettings.darkMode
  }
}

export default connect(mapStateToProps)(ExploreNavigator);

