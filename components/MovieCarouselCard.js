import * as React from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';

import { MonoText, MonoTextBold } from './StyledText'

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

const POSTER_PATH = 'https://image.tmdb.org/t/p/original/';

export default function MovieCard({props}) {
  // console.log(props)

  const onPressHandler = () => {
    console.log("press", props.title);
  }

  return (
    <View style={{}}>
      <TouchableWithoutFeedback onPress={onPressHandler}>
        <Image source={{ uri: POSTER_PATH + props.backdrop_path}} style={{ resizeMode: "contain", width: width*0.8, height: width*0.5 }}/>
      </TouchableWithoutFeedback>
    </View>
  );
}
