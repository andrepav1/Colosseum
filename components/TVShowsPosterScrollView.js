import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid-random';

// app components
import TVShowPortraitCard from './movieCards/TVShowPortraitCard';
import { MonoText, MonoTextBold } from './StyledText';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';

export default function TVShowsPosterScrollView({sectionName, tvShows, darkMode, nav}) {
  // console.log(tvShows)

  if(tvShows.length == 0) return null;

  return (
    <View style={styles.moviesContainer}>
      <View style={{ flexDirection: "row", }}>
        <View style={{ width: "70%" }}>
          <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ textAlign: "left", paddingLeft: 16 }]}>{sectionName}</MonoTextBold>
        </View>
        <View style={{ width: "30%" }}>
        </View>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={ { paddingHorizontal: 10, marginTop: 6 }}>
      {
        tvShows.map(tvShow => (
          <View key={uuid()} style={{paddingHorizontal: 4 }}>
            <TVShowPortraitCard props={tvShow} nav={nav} darkMode={darkMode} />
          </View>
        ))
      }
      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({
  moviesContainer: {
    flex: 1, 
    flexDirection: "column", 
    height: 200, 
    marginVertical: 4,
  }
});