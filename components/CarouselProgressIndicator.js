import * as React from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import uuid from 'uuid-random';

import { MonoText, MonoTextBold } from './StyledText'

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

export default function CarouselProgressIndicator({ current, total }) {

  return (
    <View style={{ width: width - 20, height: 2, flexDirection: "row", justifyContent: "center", alignSelf: "center" }}>
    {
      (() => {
        let view = [];
        for (let i = 0; i < total; i++) {
          view.push(current==i)
        }
        return view.map(curr => <View key={uuid()} style={{ backgroundColor: curr?"#777777FF":"#55555577", flex: 1, marginHorizontal: 0.5 }} />);
      })()
    }
    </View>
  );
}

