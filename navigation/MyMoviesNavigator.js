import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyMoviesScreen from '../screens/MyMoviesScreen';

const Tab = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Discover';

export default function MyMoviesNavigator({ navigation, route }) {

  return (
    <Tab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <Tab.Screen
        name="MyMovies"
        component={MyMoviesScreen}
        options={{
          title: null,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="movie-filter" iconFamily="MaterialIcons"/>,
          headerShown: true 
        }}
      />
    </Tab.Navigator>
  );
}

