import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid-random';

// app components
import PersonTVShowCrewCard from './movieCards/PersonTVShowCrewCard';
import { MonoText, MonoTextBold } from './StyledText';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';

export default function PersonTVShowCrewScrollView({sectionName, tvShows, darkMode, nav}) {
  // console.log(tvShows)

  if(tvShows.length == 0) return null;

  return (
    <View style={styles.tvShowsContainer}>
      <View style={{ flexDirection: "row", paddingLeft: 16, marginVertical: 4 }}>
        <View style={{ width: "70%" }}>
          <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ textAlign: "left" }]}>Other credits</MonoTextBold>
        </View>
        <View style={{ width: "30%" }}>
          {/* <TouchableOpacity onPress={() => {}}>
            <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ textAlign: "right", paddingRight: 16 }]}>See More:</MonoTextBold>
          </TouchableOpacity> */}
        </View>
      </View>

      <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          paddingHorizontal: 10
        }}
      >
      {
        tvShows.map(tvShow => (
          <View key={uuid()} style={{ paddingVertical: 2, paddingHorizontal: 4 }}>
            <PersonTVShowCrewCard props={tvShow} nav={nav} darkMode={darkMode} />
          </View>
        ))
      }
      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({
  tvShowsContainer: {
    flex: 1, 
    flexDirection: "column", 
    height: 330, 
  }
});