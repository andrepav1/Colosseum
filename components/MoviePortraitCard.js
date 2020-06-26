import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import { MonoText, MonoTextBold } from './StyledText'

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';

const POSTER_PATH = 'https://image.tmdb.org/t/p/original/';

export default function MovieCard({props}) {
  // console.log(props)

  const onPressHandler = () => {
    console.log("press", props.title);
  }

  return (
    <View style={[Style.lightCardContainer,{ height: 135, width: 90, margin: 6, borderRadius: 1 }]}>
      <TouchableOpacity onPress={onPressHandler}>
        <Image source={{ uri: POSTER_PATH + props.poster_path}} borderRadius={1} style={{ resizeMode: "cover", width: "100%", height: "100%" }}/>
      </TouchableOpacity>
    </View>
  );
}
