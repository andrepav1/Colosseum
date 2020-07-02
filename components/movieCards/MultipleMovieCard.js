import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import { MonoText, MonoTextBold } from '../StyledText'

// constants
import Colors from '../../constants/Colors';
import Style from '../../constants/Style';
import Layout from '../../constants/Layout';
const { width, height } = Layout.window;

const POSTER_PATH = 'https://image.tmdb.org/t/p/w342/';

export default function MultipleMovieCard({props, nav, darkMode, filler}) {
  // console.log(props)

  const aspectRatio = 1.5;
  const imageWidth = width*0.32;
  const imageHeight = imageWidth*aspectRatio;

  // last element of flatlist 
  if(filler) return (<View style={{ height: imageHeight, width: imageWidth }} />);

  const onPressHandler = () => {
    nav.navigate("MovieScreen", props);
  }

  return (
    <View style={{ height: imageHeight, width: imageWidth, margin: 2 }}>
      <TouchableOpacity onPress={onPressHandler}>
        <Image source={{ uri: POSTER_PATH + props.poster_path}} style={{ resizeMode: "cover", width: "100%", height: "100%" }}/>
      </TouchableOpacity>
    </View>
  );
}
