import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ExploreScreen from '../screens/ExploreScreen';

const Tab = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Discover';

export default function ExploreNavigator({ navigation, route }) {

  return (
    <Tab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: null,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="movie-filter" iconFamily="MaterialIcons"/>,
          headerShown: true 
        }}
      />
    </Tab.Navigator>
  );
}

