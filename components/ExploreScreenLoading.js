import * as React from 'react';
import { Image, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import uuid from 'uuid-random';

import { MonoText, MonoTextBold } from './StyledText';
import ContentPortraitFlatList from '../components/ContentPortraitFlatList';
import ContentBackdropFlatList from '../components/ContentBackdropFlatList';
import MoviesCarousel from '../components/MoviesCarousel';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';

export default function ExploreScreenLoading({ props, darkMode }) {

  const renderItem = ({item,index}) => {
  
    console.log(index);
    return null;

    if(index == 0) {
      return (<MoviesCarousel movies={item} nav={navigation} setLoaded={setCarouselLoaded}/>)
    }
    else if((index%4) == 0) {
      let isMovie = item.data.hasOwnProperty("discoverMovie");
      let content = isMovie?item.data.discoverMovie.results:item.data.discoverTv.results;
      
      return (<ContentBackdropFlatList content={content} nav={navigation} darkMode={darkMode}/>)
    }
    else {
      
      // ==============================================
      return null; // TO REMOVE
      // ==============================================

      let isMovie = item.data.hasOwnProperty("discoverMovie");
      let content = isMovie?item.data.discoverMovie.results:item.data.discoverTv.results;
      let genreId = parseInt(item.variables.params.with_genres);

      let seeMoreQuery = isMovie?'DISCOVER_MOVIE':'DISCOVER_TV';

      return (
        <ContentPortraitFlatList 
          sectionName={isMovie? genres.get(genreId) + " Movies": genres.get(genreId) + " TV Shows"} 
          content={content} 
          darkMode={darkMode} 
          nav={navigation} 
          seeMoreData={{ query: seeMoreQuery, variables: { with_genres: genreId }, titleQuery: isMovie?genres.get(genreId):genres.get(genreId) }}
        />)
    }
  }

  return (
    <View style={[darkMode?Style.darkContainer:Style.lightContainer,{ }]}>

      <FlatList
        data={new Array(20)}
        initialNumToRender={5}
        renderItem={renderItem}
        keyExtractor={uuid}
      />

    </View>
  );
}

