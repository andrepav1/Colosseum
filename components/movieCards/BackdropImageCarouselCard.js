import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import { MonoText, MonoTextBold } from '../StyledText'

// constants
import Colors from '../../constants/Colors';
import Style from '../../constants/Style';
import Layout from '../../constants/Layout';

const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w780/';

export default function BackdropImageCarouselCard({props, nav, darkMode}) {

  return (
    <View style={{ height: 128, width: 228, }}>
        <Image source={{ uri: BACKDROP_PATH + props.file_path }} style={{ resizeMode: "cover", width: "100%", height: "100%" }}/>
    </View>
  );
}
