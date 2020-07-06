import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import { MonoText, MonoTextBold } from '../StyledText'

// constants
import Colors from '../../constants/Colors';
import Style from '../../constants/Style';
import Layout from '../../constants/Layout';

const PROFILE_PATH = 'https://image.tmdb.org/t/p/w185/';

export default function FilterCardMain({props, nav, darkMode, selectFilter, selected}) {

  const onPressHandler = () => {
    selectFilter(props.name);
  }

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={[darkMode?styles.darkCardContainer:Style.lightCardContainer,{ paddingVertical: 8, paddingHorizontal: 10, borderRadius: 4, opacity:selected?0.4:1 }]}>
        <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignSelf: "center" }}>
          <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText,{ }]}>{props.name}</MonoTextBold>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  darkCardContainer: {
    shadowColor: "#000000BB",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 8,
    backgroundColor: "#44444488"
  },
});