import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import uuid from 'uuid-random';

// app components
import PosterImageCarouselCard from './movieCards/PosterImageCarouselCard';
import CarouselProgressIndicator from './CarouselProgressIndicator';
import { MonoText, MonoTextBold } from './StyledText';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

export default function MoviesPosterImagesCarousel({images, nav, darkMode }) {

  if(images.length < 2) return null;
  
  const carouselRef = React.useRef();
  const[currIndex, setCurrIndex] = React.useState(0);

  let offsetMultiplicator = 1.3;

  return (
    <View style={styles.imagesContainer}>
      <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ marginBottom: 4, marginTop: 4 }]}>Images</MonoTextBold>
      <Carousel
        ref={carouselRef}
        data={images}
        enableSnap={false}
        momentum={true}
        renderItem={({item}) => <PosterImageCarouselCard props={item} nav={nav} />}
        sliderWidth={width}
        itemWidth={90}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        onScroll={({nativeEvent: e}) => setCurrIndex(Math.ceil((e.contentOffset.x/e.contentSize.width)*images.length*offsetMultiplicator))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imagesContainer: {
    flex: 1, 
    height: 170,
    paddingLeft: 10,
    // backgroundColor: "red"
  }
});