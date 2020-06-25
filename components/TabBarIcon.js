import { Ionicons, MaterialIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { View } from 'react-native';
import * as React from 'react';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  switch (props.iconFamily) {
    case "Ionicons":
      return (
        <Ionicons
          name={props.name}
          size={30}
          style={{ marginBottom: -3 }}
          color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
    case "MaterialIcons":
      return (
        <MaterialIcons
          name={props.name}
          size={32}
          style={{ marginBottom: 0 }}
          color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
    case "FontAwesome":
      return (
        <FontAwesome
          name={props.name}
          size={30}
          style={{ marginBottom: -3 }}
          color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
    case "FontAwesome5":
      return (
        <FontAwesome5
          name={props.name}
          size={28}
          style={{ marginBottom: -5 }}
          color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
    default:
      return (
        <View
          style={{ backgroundColor: props.focused ? Colors.tabIconSelected : Colors.tabIconDefault, width: 20, height: 20 }}
        />
      );
  }
}
