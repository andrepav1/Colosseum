import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import uuid from 'uuid-random';

// app components
import TVSeasonCard from './movieCards/TVSeasonCard';
import { MonoText, MonoTextBold } from './StyledText';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

import { useQuery } from '@apollo/react-hooks';

import { 
  SEASON_INFO
} from '../gqlQueries'
  // "w300",
  // "w780",
  // "w1280",
  // "original"
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w780/';

export default function TVSeasonsView({tvShow, images, variables, darkMode, nav}) {
  const carouselRef = React.useRef();
  
  const [seasonVisible, setSeasonVisible] = React.useState(1);

  const onSeasonPressedHandler = (season_number) => {
    setSeasonVisible(season_number);
  }

  return (
    <View style={{ marginVertical: 8 }}>

      <View style={{ marginBottom: 8 }}>  
        <Carousel
          ref={carouselRef}
          data={tvShow.seasons}
          containerCustomStyle={{ flexDirection: "column" }}
          renderItem={({item, index}) => (
            <View key={uuid()} style={{ width: width }}>
              <TVSeasonCard tvShow={tvShow} seasonNumber={(index+1)%tvShow.seasons.length} nav={nav} darkMode={darkMode} />
            </View>
          )}
          sliderWidth={width}
          itemWidth={width}
          activeSlideAlignment={"center"}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        />
      </View>

      <View>
        {/* <TVSeasonCard tvShow={tvShow} season={seasonVisible} nav={nav} darkMode={darkMode} /> */}
      </View>

    </View>
  );
}