import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ExploreScreen from '../screens/ExploreScreen';

import Color from '../constants/Colors'

const Tab = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Discover';

export default function ExploreNavigator({ navigation, route }) {

  const [darkMode, setDarkMode] = React.useState(false);

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

