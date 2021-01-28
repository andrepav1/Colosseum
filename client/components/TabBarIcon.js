import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome, FontAwesome5, Entypo } from '@expo/vector-icons';
import { View } from 'react-native';
import * as React from 'react';

import Colors from '../constants/Colors';

export default function TabBarIcon({iconFamily, name, focused, darkMode, margin, padding, size}) {
  switch (iconFamily) {
    case "Ionicons":
      return (
        <Ionicons
          name={name}
          size={30}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : (darkMode?Colors.tabIconDefaultDark:Colors.tabIconDefault)}
        />
      );
    case "MaterialIcons":
      return (
        <MaterialIcons
          name={name}
          size={32}
          style={{ marginBottom: 0 }}
          color={focused ? Colors.tabIconSelected : (darkMode?Colors.tabIconDefaultDark:Colors.tabIconDefault)}
        />
      );
    case "FontAwesome":
      return (
        <FontAwesome
          name={name}
          size={30}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : (darkMode?Colors.tabIconDefaultDark:Colors.tabIconDefault)}
        />
      );
    case "FontAwesome5":
      return (
        <FontAwesome5
          name={name}
          size={26}
          style={{ marginBottom: -4 }}
          color={focused ? Colors.tabIconSelected : (darkMode?Colors.tabIconDefaultDark:Colors.tabIconDefault)}
        />
      );
    case "MaterialCommunityIcons":
      return (
        <MaterialCommunityIcons
          name={name}
          size={size?size:30}
          style={{ marginBottom: margin?margin:0 }}
          color={focused ? Colors.tabIconSelected : (darkMode?Colors.tabIconDefaultDark:Colors.tabIconDefault)}
        />
      );
    case "Entypo":
      return (
        <Entypo
          name={name}
          size={28}
          style={{ marginBottom: -4 }}
          color={focused ? Colors.tabIconSelected : (darkMode?Colors.tabIconDefaultDark:Colors.tabIconDefault)}
        />
      );
    default:
      return (
        <View
          style={{ backgroundColor: focused ? Colors.tabIconSelected : (darkMode?Colors.tabIconDefaultDark:Colors.tabIconDefault), width: 20, height: 20 }}
        />
      );
  }
}
