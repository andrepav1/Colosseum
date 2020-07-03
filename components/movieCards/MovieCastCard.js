import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import { MonoText, MonoTextBold } from '../StyledText'

// constants
import Colors from '../../constants/Colors';
import Style from '../../constants/Style';
import Layout from '../../constants/Layout';

const PROFILE_PATH = 'https://image.tmdb.org/t/p/w185/';

export default function MovieCard({props, nav, darkMode}) {
  // console.log(props)

  const onPressHandler = () => {
    nav.navigate("PersonScreen", props);
  }

  return (
    <TouchableWithoutFeedback onPress={onPressHandler}>
      <View style={{ flex: 1, width: 120 }}>
        <View style={{ height: 100, width: 100, alignSelf: "center", marginBottom: 2 }}>
          <Image source={{ uri: PROFILE_PATH + props.profile_path}}  borderRadius={60} style={{ resizeMode: "cover", height: "100%", width: "100%", backgroundColor: "#44444444"}}/>
        </View>
        <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText, { alignSelf: "center", width: 120, textAlign: "center" }]}>{props.name}</MonoTextBold>
        <MonoText style={{ alignSelf: "center", width: 120, textAlign: "center", color: darkMode?'#AAAAAABB':'#444444BB', fontSize: 12 }}>{props.character}</MonoText>
      </View>
    </TouchableWithoutFeedback>
  );
}
