import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import uuid from 'uuid-random';

// app components
import MovieVideoCarouselCard from './movieCards/MovieVideoCarouselCard';
import CarouselProgressIndicator from './CarouselProgressIndicator';
import { MonoText, MonoTextBold } from './StyledText';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

export default function MovieVideosCarousel({videos, nav, darkMode }) {

  if(videos.length == 0) return null;

  const aspectRatio = 0.57;
  const playerWidth = width*0.95;
  const playerHeight = playerWidth* aspectRatio + 46;

  const carouselRef = React.useRef();
  const[currIndex, setCurrIndex] = React.useState(0);

  return (
    <View style={{ height: playerHeight }}>
      <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ marginLeft: 10, marginVertical: 6 }]}>More Videos</MonoTextBold>
      <Carousel
        ref={carouselRef}
        data={videos}
        renderItem={({item}) => <MovieVideoCarouselCard props={item} nav={nav} />}
        sliderWidth={width}
        itemWidth={playerWidth}
        activeSlideAlignment={"center"}
        inactiveSlideOpacity={0.2}
        onSnapToItem={(index) => setCurrIndex(index)}
      />
      <View style={{ position: "absolute", top: playerHeight-10, alignSelf: "center"}}>
        <CarouselProgressIndicator current={currIndex} total={videos.length} />
      </View>
    </View>
  );
}
