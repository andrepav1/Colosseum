import * as React from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';

import { MonoText, MonoTextBold } from '../StyledText'

// constants
import Colors from '../../constants/Colors';
import Style from '../../constants/Style';
import Layout from '../../constants/Layout';
const { width, height } = Layout.window;

const POSTER_PATH = 'https://image.tmdb.org/t/p/w780/';

export default function MovieCarouselCard({props, nav, setLoaded}) {
  // console.log(props)

  const onPressHandler = () => {
    nav.navigate("MovieScreen", props);
  }

  // Keep track of how many images are loaded, so that we can show carousel when all images are loaded
  const onLoadEndHandler = () => {
    setLoaded(true);
  }

  return (
    <View style={{ width: width*0.92 }}>
      <TouchableWithoutFeedback onPress={onPressHandler}>
        <Image source={{ uri: POSTER_PATH + props.backdrop_path}} style={{ resizeMode: "contain", width: "100%", height: "100%" }} onLoadStart={onLoadEndHandler}/>
      </TouchableWithoutFeedback>
    </View>
  );
}
