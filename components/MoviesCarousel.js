import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import uuid from 'uuid-random';

// app components
import MovieCarouselCard from './movieCards/MovieCarouselCard';
import CarouselProgressIndicator from './CarouselProgressIndicator';
import { MonoText, MonoTextBold } from './StyledText';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

export default function MoviesCarousel({movies, nav, setLoaded }) {
  // console.log(movies)

  const aspectRatio = 0.6;
  const imageWidth = width*0.92;
  const imageHeight = imageWidth*aspectRatio;

  const carouselRef = React.useRef();
  const[currIndex, setCurrIndex] = React.useState(0);
  const [loadingComplete, setLoadingComplete] = React.useState(false);

  return (
    <View style={{ paddingBottom: 8, paddingTop: 4, height: imageHeight }}>
      <Carousel
        ref={carouselRef}
        autoplay={true}
        loop={true}
        autoplayInterval={5000}
        autoplayDelay={3000}
        data={movies}
        renderItem={({item}) => <MovieCarouselCard props={item} nav={nav} setLoaded={setLoaded}/>}
        sliderWidth={width}
        itemWidth={imageWidth}
        inactiveSlideOpacity={0.2}
        onSnapToItem={setCurrIndex}
      />
      <View style={{ position: "absolute", top: imageHeight-4, alignSelf: "center" }}>
        <CarouselProgressIndicator current={currIndex} total={movies.length} />
      </View>
    </View>
  );
}
