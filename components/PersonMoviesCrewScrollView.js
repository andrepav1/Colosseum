import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid-random';

// app components
import PersonMoviesCrewCard from './movieCards/PersonMoviesCrewCard';
import { MonoText, MonoTextBold } from './StyledText';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';

export default function PersonMoviesCrewScrollView({sectionName, movies, darkMode, nav}) {
  // console.log(movies)

  if(movies.length == 0) return null;

  return (
    <View style={styles.moviesContainer}>
      <View style={{ flexDirection: "row", }}>
        <View style={{ width: "70%" }}>
          <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ textAlign: "left", paddingLeft: 16, marginTop: 2 }]}>Other credits</MonoTextBold>
        </View>
        <View style={{ width: "30%" }}>
          {/* <TouchableOpacity onPress={() => {}}>
            <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ textAlign: "right", paddingRight: 16 }]}>See More:</MonoTextBold>
          </TouchableOpacity> */}
        </View>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={ { paddingHorizontal: 10, marginTop: 4 }}>
      {
        movies.map(movie => (
          <View key={uuid()} style={{ paddingHorizontal: 4 }}>
            <PersonMoviesCrewCard props={movie} nav={nav} darkMode={darkMode} />
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
    height: 100, 
    marginVertical: 8,
  }
});