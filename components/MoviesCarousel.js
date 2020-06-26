import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import uuid from 'uuid-random';

// app components
import MovieCarouselCard from './MovieCarouselCard';
import { MonoText, MonoTextBold } from './StyledText';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

export default function MoviesCarousel({movies}) {
  // console.log(movies)
  return (
    <View style={styles.moviesContainer}>
      <Carousel
        containerCustomStyle={{}}
        autoplay={true}
        loop={true}
        autoplayInterval={8000}
        autoplayDelay={3000}
        data={movies}
        renderItem={({item, index}) => <MovieCarouselCard props={item} />}
        sliderWidth={width}
        itemWidth={width*0.78}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  moviesContainer: {
    flex: 1, 
    height: 190, 
  }
});