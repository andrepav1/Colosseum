import * as React from 'react';
import { StyleSheet, TouchableOpacity, RefreshControl, FlatList, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';
import uuid from 'uuid-random';

// app components
import { MonoText } from '../components/StyledText';
import MoviesPosterScrollView from '../components/MoviesPosterScrollView';
import MoviesScrollView from '../components/MoviesScrollView';
import MoviesCarousel from '../components/MoviesCarousel';
import DataLoadingComponent from '../components/DataLoadingComponent';
import DataErrorComponent from '../components/DataErrorComponent';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import { genres, genreObjectsArray } from '../constants/MovieData';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

import { useQuery } from '@apollo/react-hooks';

// GraphQL Queries
import { 
  MOVIE_POPULAR,
  MOVIE_TOP_RATED,
  MOVIE_NOW_PLAYING,
  DISCOVER_MOVIE,
} from '../gqlQueries'

import {connect} from 'react-redux';

function ExploreScreen({ navigation, route, darkMode }) {

  // =================================================================
  // React Hooks 
  const [carouselLoaded, setCarouselLoaded] = React.useState(false);

  const [refreshing, setRefreshing] = React.useState(false);
    
  const onRefresh = () => {
    setRefreshing(true);

    for(const response of movieResponses) { 

      let { total_pages } = response.data.discoverMovie;

      // Only show first ten pages 
      total_pages = total_pages>10?10:total_pages; 

      const page = Math.floor(Math.random() * total_pages + 1); 

      const { with_genres: genreId } = response.variables.params;

      response.refetch({ params: { with_genres: genreId, page: page }}).catch((e) => console.log("promise rejected:", e));

    };
    
    setRefreshing(false);
    
  };

  // =================================================================
  // useQuery hooks
  
  const popularMoviesResponse = useQuery(MOVIE_POPULAR, { variables: { params: { page: 1 }}});
  const topRatedMoviesResponse = useQuery(MOVIE_TOP_RATED, { variables: { params: { page: 1 }}});
  const movieNowPlayingResponse= useQuery(MOVIE_NOW_PLAYING, { variables: { params: { page: 1 }}});

  const movieResponses = genreObjectsArray.map((genre) => {
    return useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: genre.id.toString(), page: 1 }}})
  })

  // =================================================================
  // Rendering loading component when data is loading 
  for(const response of movieResponses) { if (response.loading) return <DataLoadingComponent darkMode={darkMode} /> };

  // =================================================================
  // Rendering loading component when data is refetching 
  // for(const response of movieResponses) { if (response.networkStatus == 4) return <DataLoadingComponent darkMode={darkMode} /> };

  // =================================================================
  // Rendering error component if at least one error occurs 
  for(const response of movieResponses) { if (response.error) return <DataErrorComponent props={response} darkMode={darkMode} /> };

  // =================================================================
  // DESTRUCTURING RESPONSE OBJECTS
  const {moviePopular} = popularMoviesResponse.data;
  const {movieTopRated} = topRatedMoviesResponse.data;
  const {movieNowPlaying} = movieNowPlayingResponse.data;

  const renderItem = ({item,index}) => {
    if(index == 0) {
      return (<MoviesCarousel movies={item} nav={navigation} setLoaded={setCarouselLoaded}/>)
    }
    else if((index%4) == 0) {
      let movies = item.data.discoverMovie.results;
      return (<MoviesScrollView movies={movies} nav={navigation} darkMode={darkMode}/>)
    }
    else {
      let sectionName = genres.get(parseInt(item.variables.params.with_genres))+" Movies";
      let movies = item.data.discoverMovie.results;
      return (<MoviesPosterScrollView sectionName={sectionName} movies={movies} darkMode={darkMode} nav={navigation} />)
    }
  }

  // =================================================================
  // SCREEN RENDERING

  return (
    <View style={[darkMode?Style.darkContainer:Style.lightContainer,{ }]}>

      <FlatList
        data={[movieNowPlaying].concat(movieResponses)}
        initialNumToRender={5}
        renderItem={renderItem}
        keyExtractor={uuid}
        refreshing={refreshing} 
        onRefresh={onRefresh}
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

