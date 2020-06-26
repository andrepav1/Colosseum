import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid-random';

// app components
import MoviePortraitCard from './MoviePortraitCard';
import { MonoText, MonoTextBold } from './StyledText';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';

export default function MoviesPosterScrollView({sectionName, movies}) {
  // console.log(movies)
  return (
    <View style={styles.moviesContainer}>
      <View style={{ flexDirection: "row", }}>
        <View style={{ width: "75%" }}>
          <MonoText style={[Style.mediumDarkText,{ textAlign: "left", paddingLeft: 16 }]}>{sectionName}</MonoText>
        </View>
        <View style={{ width: "25%" }}>
          <TouchableOpacity onPress={() => {}}>
            <MonoText style={[Style.mediumDarkText,{ textAlign: "right", paddingRight: 16 }]}>See All:</MonoText>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={ { paddingHorizontal: 10 }}>
      {
        movies.map(movie => (
          <MoviePortraitCard key={uuid()} props={movie} />
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
    height: 170, 
    marginVertical: 4,
  }
});