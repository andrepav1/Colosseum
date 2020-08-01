import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import uuid from 'uuid-random';
import Lightbox from 'react-native-lightbox';

// app components
import { MonoText, MonoTextBold } from '../StyledText';

// constants
import Colors from '../../constants/Colors';
import Style from '../../constants/Style';
import Layout from '../../constants/Layout';
const { width, height } = Layout.window;

// "w92", "w185", "w300", "original"
const STILL_PATH = 'https://image.tmdb.org/t/p/original/';

export default function EpisodeCard({episode, darkMode, nav}) {
  
  // =================================================================
  // SCREEN RENDERING

  return (
    <View style={[styles.seasonContainer,{ backgroundColor: darkMode?"#00000044":"#FFFFFFDD" }]}>
      <View style={{ width: 140, height:80 }}>
        <Lightbox activeProps={{ resizeMode: "contain", backgroundColor:"transparent" }}>
          <Image source={{ uri: STILL_PATH + episode.still_path }} style={{ resizeMode: "contain", height: "100%", backgroundColor:"#66666666" }}/>
        </Lightbox>
      </View>
      <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ marginLeft: 16 }]}>{episode.name}</MonoTextBold>
      
    </View>
  );
}


const styles = StyleSheet.create({
  seasonContainer: {
    width: width,
    height: 200
  }
});