import * as React from 'react';
import { StyleSheet, TouchableOpacity, RefreshControl, FlatList, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';
import uuid from 'uuid-random';

// app components
import { MonoText } from '../components/StyledText';
import ContentPortraitFlatList from '../components/ContentPortraitFlatList';
import ContentBackdropFlatList from '../components/ContentBackdropFlatList';
import MoviesCarousel from '../components/MoviesCarousel';
import DataLoadingComponent from '../components/DataLoadingComponent';
import DataErrorComponent from '../components/DataErrorComponent';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import { genres } from '../constants/MovieData';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

import { useQuery } from '@apollo/react-hooks';

// GraphQL Queries
import { 
  MOVIE_POPULAR,
  MOVIE_TOP_RATED,
  MOVIE_NOW_PLAYING,
  DISCOVER_MOVIE,
  DISCOVER_TV
} from '../gqlQueries'

import {connect} from 'react-redux';

function ExploreScreen({ navigation, route, darkMode }) {

  // =================================================================
  // React Hooks 
  const [refreshing, setRefreshing] = React.useState(false);

  // =================================================================
  // useQuery hooks
  
  // const popularMoviesResponse = useQuery(MOVIE_POPULAR, { variables: { params: { page: 1 }}});
  // const topRatedMoviesResponse = useQuery(MOVIE_TOP_RATED, { variables: { params: { page: 1 }}});
  // const movieNowPlayingResponse= useQuery(MOVIE_NOW_PLAYING, { variables: { params: { page: 1 }}});

  // =================================================================
  // functions 
  
  const renderItem = ({item,index}) => {

    if(index == 0) {
      return null
      // return (<MoviesCarousel movies={item} nav={navigation} />)
    }
    else if((index%4) == 0) {
      let isMovie = item.id != null;
      
      return null
      // return (<ContentBackdropFlatList content={content} nav={navigation} darkMode={darkMode}/>)
    }
    else {

      let isMovie = item.id;
      return (
        <ContentPortraitFlatList 
          query={isMovie?DISCOVER_MOVIE:DISCOVER_TV}
          params={{ page: 1, with_genres: isMovie?item.id.toString():item.tv_id.toString() }}
          label={item.name}
          darkMode={darkMode} 
          nav={navigation} 
        />)
    }
  }

  const shuffle = (array) => {
    
    for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  // =================================================================
  // SCREEN RENDERING

  return (
    <View style={[darkMode?Style.darkContainer:Style.lightContainer,{ }]}>

      <FlatList
        data={genres}
        renderItem={renderItem}
        keyExtractor={uuid}
        refreshing={refreshing} 
        onRefresh={() => {}}
      />

    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.GlobalSettings.darkMode
  }
}

export default connect(mapStateToProps)(ExploreScreen);

