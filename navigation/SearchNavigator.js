import * as React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// constants
import Style from '../constants/Style'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'
const { width, height } = Layout.window;

import MovieSearchScreen from '../screens/MovieSearchScreen'
import PeopleSearchScreen from '../screens/MovieSearchScreen'
import TVShowSearchScreen from '../screens/MovieSearchScreen'

const Tab = createMaterialTopTabNavigator ();

const INITIAL_ROUTE_NAME = 'MovieSearch';

import {connect} from 'react-redux';

function SearchNavigator({ navigation, darkMode }) {

  return (
    <Tab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        labelStyle: darkMode?Style.smallLightText:Style.smallDarkText,
        style: { 
          backgroundColor: darkMode?Colors.darkHeaderColor:Colors.lightHeaderColor, 
          paddingTop: 20,
          shadowOpacity: 0.2,
          shadowColor: darkMode?"#AAA":"#444", 
        },
      }}
    >
      <Tab.Screen
        name="MovieSearch"
        component={MovieSearchScreen}
        options={{
          title: "Movies",
        }}
      />
      <Tab.Screen
        name="PeopleSearch"
        component={PeopleSearchScreen}
        options={{
          title: "People",
        }}
      />
      <Tab.Screen
        name="TVShowSearch"
        component={TVShowSearchScreen}
        options={{
          title: "TV Shows",
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

