import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid-random';

// app components
import MovieCastCard from './movieCards/MovieCastCard';
import { MonoText, MonoTextBold } from './StyledText';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';

export default function MoviesCastScrollView({sectionName, cast, darkMode, nav}) {
  // console.log(movies)

  if(cast.length == 0) return null;

  return (
    <View style={styles.castContainer}>
      <View style={{ flexDirection: "row", }}>
        <View style={{ width: "70%" }}>
          <MonoTextBold style={[darkMode?Style.largeLightText:Style.largeDarkText,{ textAlign: "left", paddingLeft: 10 }]}>Cast</MonoTextBold>
        </View>
        <View style={{ width: "30%" }}>
          {/* <TouchableOpacity onPress={() => {}}>
            <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ textAlign: "right", paddingRight: 16 }]}>See More:</MonoTextBold>
          </TouchableOpacity> */}
        </View>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={ { paddingHorizontal: 6, marginTop: 6 }}>
      {
        cast.map(cast => (
          <View key={uuid()} style={{ paddingHorizontal: 4 }}>
            <MovieCastCard props={cast} nav={nav} darkMode={darkMode} />
          </View>
        ))
      }
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  castContainer: {
    flex: 1, 
    flexDirection: "column",  
    marginVertical: 2,
  }
});