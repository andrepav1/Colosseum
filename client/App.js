import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';

import {Provider} from 'react-redux';
import store from './store';

const gqluri = `http://${Constants.manifest.debuggerHost.split(':').shift()}:4000/graphql`;
// const gqluri = `http://5.69.246.84:4000/graphql`;

const client = new ApolloClient({
  uri: gqluri 
});

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <ApolloProvider client={client}>
          <NavigationContainer linking={LinkingConfiguration}>
            <Provider store={store}>
              <Stack.Navigator>
                <Stack.Screen name="Root" component={BottomTabNavigator} options={{ title: '', headerShown: false }} />
              </Stack.Navigator>
            </Provider>
          </NavigationContainer>
        </ApolloProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
