import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyMoviesScreen from '../screens/MyMoviesScreen';

const Tab = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Discover';

// constants
import Style from '../constants/Style'
import Color from '../constants/Colors'

import {connect} from 'react-redux';

function MyMoviesNavigator({ navigation, darkMode }) {

  return (
    <Tab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <Tab.Screen
        name="MyMovies"
        component={MyMoviesScreen}
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

export default connect(mapStateToProps)(MyMoviesNavigator);

