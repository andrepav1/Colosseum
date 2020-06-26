import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid-random';

// app components
import MovieLandscapeCard from './MovieLandscapeCard';
import { MonoText, MonoTextBold } from './StyledText';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';

export default function MoviesScrollView({movies}) {
  // console.log(movies)
  return (
    <View style={styles.moviesContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={ { paddingHorizontal: 10 }}>
      {
        movies.map(movie => (
          <MovieLandscapeCard key={uuid()} props={movie} />
        ))
      }
      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({
  moviesContainer: {
    flex: 1, 
    height: 125, 
    marginVertical: 4,
  }
});