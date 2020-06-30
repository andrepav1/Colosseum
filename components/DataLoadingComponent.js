import * as React from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';

import { MonoText, MonoTextBold } from './StyledText'

export default function DataLoadingComponent({ props }) {

  return (
    <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
      <MonoText style={{ fontSize: 40, alignSelf: "center"}}>Loading...</MonoText>
    </View>
  );
}
