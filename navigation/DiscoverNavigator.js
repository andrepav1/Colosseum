import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DiscoverScreen from '../screens/DiscoverScreen';

const Tab = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Discover';

export default function DiscoverNavigator({ navigation, route }) {

  return (
    <Tab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          title: 'Discover',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="movie-filter" iconFamily="MaterialIcons"/>,
          headerShown: false 
        }}
      />
    </Tab.Navigator>
  );
}

