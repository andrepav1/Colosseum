import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';

import ExploreNavigator from './ExploreNavigator';
import DiscoverNavigator from './DiscoverNavigator';
import MyMoviesNavigator from './MyMoviesNavigator';

const Tab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Explore';

export default function BottomTabNavigator({ navigation, route }) {

  return (
    <Tab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="theater-masks" iconFamily="FontAwesome5" />,
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverNavigator}
        options={{
          title: 'Discover',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="movie-filter" iconFamily="MaterialIcons"/>,
        }}
      />
      <Tab.Screen
        name="MyMovies"
        component={MyMoviesNavigator}
        options={{
          title: 'MyMovies',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" iconFamily="Ionicons" />,
        }}
      />
    </Tab.Navigator>
  );
}

