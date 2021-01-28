import * as React from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';

import { MonoText, MonoTextBold } from '../StyledText'

// constants
import Colors from '../../constants/Colors';
import Style from '../../constants/Style';
import Layout from '../../constants/Layout';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w780/';

export default function ContentBackdropCard({props, nav, darkMode}) {
  
  const isMovie = props.hasOwnProperty('title');

  const onPressHandler = () => {
    if(isMovie) {
      nav.navigate("MovieScreen", props);
    }
    else {
      nav.navigate("TVShowScreen", props);
    }
  }

  return (
    <View style={[darkMode?Style.darkCardContainer:Style.lightCardContainer,{ height: 128, width: 228, borderRadius: 4}]}>
      <TouchableWithoutFeedback onPress={onPressHandler}>
        <Image source={{ uri: POSTER_PATH + props.backdrop_path }} borderRadius={4} style={{ resizeMode: "cover", width: "100%", height: "100%", backgroundColor: "#44444444" }}/>
      </TouchableWithoutFeedback>
    </View>
  );
}
