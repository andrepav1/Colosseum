import * as React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';

import ExploreScreen from '../screens/ExploreScreen';
import MovieScreen from '../screens/MovieScreen';
import MultipleMoviesScreen from '../screens/MultipleMoviesScreen';
import PersonScreen from '../screens/PersonScreen';


import Color from '../constants/Colors'

const Tab = createStackNavigator();
const INITIAL_ROUTE_NAME = 'MultipleMoviesScreen';

import {connect} from 'react-redux';

function SearchNavigator({ navigation, darkMode }) {

  return (
    <Tab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <Tab.Screen
        name="MultipleMoviesScreen"
        component={MultipleMoviesScreen}
        options={{
          title: null,
          headerShown: true, 
          headerTitle: () => <View style={{ width: 300, }}><SearchBar style={{ width: 300, }} /></View>,
          headerStyle: {
            backgroundColor: darkMode?Color.darkHeaderColor:Color.lightHeaderColor,
            elevation: darkMode?0:8, // remove shadow on Android
            shadowOpacity: darkMode?0:0.2, // remove shadow on iOS
            height: 100,
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

export default connect(mapStateToProps)(SearchNavigator);

