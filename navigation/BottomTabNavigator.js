import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import DiscoverScreen from '../screens/DiscoverScreen';

import ExploreScreen from '../screens/ExploreScreen';

const Tab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Explore';

export default function TabNavigator({ navigation, route }) {

  return (
    <Tab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{}}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="theater-masks" iconFamily="FontAwesome5" />,
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          title: 'Discover',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="movie-filter" iconFamily="MaterialIcons"/>,
        }}
      />
      <Tab.Screen
        name="MyMovies"
        component={HomeScreen}
        options={{
          title: 'MyMovies',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" iconFamily="Ionicons" />,
        }}
      />
    </Tab.Navigator>
  );
}

