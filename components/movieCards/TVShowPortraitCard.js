import * as React from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';

import { MonoText, MonoTextBold } from '../StyledText'

// constants
import Colors from '../../constants/Colors';
import Style from '../../constants/Style';
import Layout from '../../constants/Layout';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w342/';

export default function TVShowPortraitCard({props, nav, darkMode}) {
  // console.log(props)

  const onPressHandler = () => {
    nav.navigate("TVShowScreen", props);
  }

  return (
    <View style={[darkMode?Style.darkCardContainer:Style.lightCardContainer,{ height: 164, width: 110, borderRadius: 1 }]}>
      <TouchableWithoutFeedback onPress={onPressHandler}>
        <View>
          <View style={{ overflow: "hidden", height: "100%", width: "100%", position: "absolute", justifyContent: "flex-end" }}>
            <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText,{ alignSelf: "center", textAlign: "center", width: "90%", opacity: 0.8, paddingBottom: 8  }]}>{props.title}</MonoTextBold>
          </View>
          <Image source={{ uri: POSTER_PATH + props.poster_path}} borderRadius={1} style={{ resizeMode: "cover", width: "100%", height: "100%", backgroundColor: "#44444444" }}/>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
