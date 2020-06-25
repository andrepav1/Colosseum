import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../constants/Colors';

export default function TabBarMiddleIcon(props) {
  return (
    <View style={[styles.circleView, {flexDIrection: "column", justifyContent: "center" }]}>
      <MaterialIcons
        name="movie-filter"
        size={50}
        style={{ alignSelf: "center" }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  circleView: {
    position: "absolute",
    height: 100,
    width: 100,
    backgroundColor: "red",
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 50,
  }
});
