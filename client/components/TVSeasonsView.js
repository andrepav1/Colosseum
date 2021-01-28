import * as React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, ImageBackground, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import uuid from 'uuid-random';

// app components
import { MonoText, MonoTextBold } from './StyledText';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

import { useQuery } from '@apollo/react-hooks';

import { 
  SEASON_INFO
} from '../gqlQueries'

// "w300", "w780", "w1280", "original"
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w780/';

export default function TVSeasonsView({tvInfo, images, variables, darkMode, nav}) {
  const carouselRef = React.useRef();
  
  const onSeasonPressedHandler = ({ season_number, name }) => {
    // console.log("Season number:", season_number);
    nav.navigate('SeasonScreen', { tvShowId: tvInfo.id, season_name: name, season_number });
  }

  // borderTopColor: "#00000022", borderTopWidth: 0.4
  return (
    <View style={{ marginBottom: 16 }}>  
      <MonoTextBold style={[darkMode?Style.largeLightText:Style.largeDarkText,{ marginVertical: 8, paddingLeft: 16 }]}>Seasons</MonoTextBold>
      <View style={{ borderTopColor: "#00000022", borderTopWidth: 0.4 }}>
        {
          tvInfo.seasons.map((season) => (
            <TouchableWithoutFeedback key={uuid()} onPress={() => onSeasonPressedHandler(season)}>
              <View style={styles.seasonView}>
                <MonoText style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ fontSize: 14 }]}>{season.name}</MonoText>
                <Ionicons name="md-arrow-dropright" size={20} color={darkMode?"#22222288":"#000000AA"} style={{ position: "absolute", right: 24, top: 10 }}/>
              </View>
            </TouchableWithoutFeedback>
          ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  seasonView: {
    width: width, 
    borderBottomColor: "#00000022", 
    borderBottomWidth: 0.4, 
    paddingVertical: 12, 
    paddingLeft: 28,
    flexDirection: "row",
  }
})