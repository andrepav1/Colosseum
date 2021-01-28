import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';

import ExploreNavigator from './ExploreNavigator';
import DiscoverNavigator from './DiscoverNavigator';
import MyMoviesNavigator from './MyMoviesNavigator';

import SearchScreen from '../screens/SearchScreen';
import MoreScreen from '../screens/MoreScreen';

import Color from '../constants/Colors'

const Tab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Explore';

import {connect} from 'react-redux';

function BottomTabNavigator({ navigation, darkMode }) {

  return (
    <Tab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        style: {  
          backgroundColor: darkMode?Color.darkBottomTabColor:Color.lightBottomTabColor,
          borderTopColor: darkMode?"transparent":"#FFF",
        }
      }}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="theater-masks" iconFamily="FontAwesome5" darkMode={darkMode} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-search" iconFamily="Ionicons" darkMode={darkMode} />,
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverNavigator}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="cards" iconFamily="MaterialCommunityIcons" size={46} margin={-16} darkMode={darkMode} />,
        }}
      />
      <Tab.Screen
        name="MyMovies"
        component={MyMoviesNavigator}
        options={{
          title: 'MyMovies',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="library-movie" iconFamily="MaterialCommunityIcons" darkMode={darkMode} />,
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: 'More',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="dots-three-horizontal" iconFamily="Entypo" darkMode={darkMode} />,
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

export default connect(mapStateToProps)(BottomTabNavigator);

