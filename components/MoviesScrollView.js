import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid-random';

// app components
import MovieLandscapeCard from './movieCards/MovieLandscapeCard';
import { MonoText, MonoTextBold } from './StyledText';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';

export default function MoviesScrollView({movies, nav, darkMode}) {
  
  // console.log(movies)

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={ { paddingHorizontal: 10 }}>
      {
        movies.map(movie => (
          <View key={uuid()} style={{ paddingHorizontal: 4, paddingVertical: 8 }}>
            <MovieLandscapeCard key={uuid()} props={movie} nav={nav} darkMode={darkMode}/>
          </View>
        ))
      }
      </ScrollView>

    </View>
  );
}
