import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import uuid from 'uuid-random';

// app components
import BackdropImageCarouselCard from './movieCards/BackdropImageCarouselCard';
import CarouselProgressIndicator from './CarouselProgressIndicator';
import { MonoText, MonoTextBold } from './StyledText';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

export default function MoviesImagesCarousel({images, nav, darkMode }) {

  const carouselRef = React.useRef();
  const[currIndex, setCurrIndex] = React.useState(0);

  return (
    <View style={styles.imagesContainer}>
      <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ marginBottom: 8 }]}>Images</MonoTextBold>
      <Carousel
        ref={carouselRef}
        data={images}
        enableSnap={false}
        momentum={true}
        renderItem={({item}) => <BackdropImageCarouselCard props={item} nav={nav} />}
        sliderWidth={width}
        itemWidth={232}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        onScroll={({nativeEvent: e}) => setCurrIndex(Math.ceil((e.contentOffset.x/e.contentSize.width)*images.length))}
      />
      <View style={{ position: "absolute", top: 164, alignSelf: "center"}}>
        <CarouselProgressIndicator current={currIndex} total={images.length} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imagesContainer: {
    flex: 1, 
    height: 180,
    paddingLeft: 10,

  }
});