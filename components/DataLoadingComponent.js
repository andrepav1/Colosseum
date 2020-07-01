import * as React from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';

import { MonoText, MonoTextBold } from './StyledText'

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';

export default function DataLoadingComponent({ props, darkMode }) {

  return (
    <View style={[darkMode?Style.darkContainer:Style.lightContainer,{ flex: 1, flexDirection: "column", justifyContent: "center" }]}>
      <MonoText style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ alignSelf: "center"}]}>Loading...</MonoText>
    </View>
  );
}
