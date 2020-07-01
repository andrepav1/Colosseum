import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';

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
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

import { useQuery } from '@apollo/react-hooks';

// GraphQL Queries
import { 
  MOVIE_POPULAR,
  MOVIE_TOP_RATED,
  MOVIE_NOW_PLAYING,

} from '../gqlQueries'

import {connect} from 'react-redux';

function ExploreScreen({ navigation, route, darkMode }) {

  // =================================================================
  // useState Hooks 
  const [carouselLoaded, setCarouselLoaded] = React.useState(false);

  // =================================================================
  // useQuery Hooks
  const popularMoviesResponse = useQuery(MOVIE_POPULAR);
  const topRatedMoviesResponse = useQuery(MOVIE_TOP_RATED);
  const movieNowPlayingResponse = useQuery(MOVIE_NOW_PLAYING);

  // =================================================================
  // Rendering loading component when data is loading 
  if (popularMoviesResponse.loading) return <DataLoadingComponent />;
  if (topRatedMoviesResponse.loading) return <DataLoadingComponent />;
  if (movieNowPlayingResponse.loading) return <DataLoadingComponent />;

  
  // =================================================================
  // Rendering loading component when data is refetching 
  if (popularMoviesResponse.networkStatus == 4) return <DataLoadingComponent />;
  if (topRatedMoviesResponse.networkStatus == 4) return <DataLoadingComponent />;
  if (movieNowPlayingResponse.networkStatus == 4) return <DataLoadingComponent />;
  
  // =================================================================
  // Rendering error component if at least one error occurs 
  if (popularMoviesResponse.error) return <DataErrorComponent props={popularMoviesResponse} />;
  if (topRatedMoviesResponse.error) return <DataErrorComponent props={topRatedMoviesResponse}/>;
  if (movieNowPlayingResponse.error) return <DataErrorComponent props={movieNowPlayingResponse} />;

  // =================================================================
  // DESTRUCTURING RESPONSE OBJECTS
  const { data: { moviePopular }} = popularMoviesResponse;
  const { data: { movieTopRated }} = topRatedMoviesResponse;
  const { data: { movieNowPlaying }} = movieNowPlayingResponse;

  
  // =================================================================
  // SCREEN RENDERING
  
  return (
    <View style={{ flex:1 }}>
      <ScrollView style={darkMode?Style.darkContainer:Style.lightContainer} contentContainerStyle={{ }}>

        <MoviesCarousel movies={moviePopular} nav={navigation} setLoaded={setCarouselLoaded}/>

        <MoviesPosterScrollView sectionName={"Popular Movies"} movies={moviePopular} darkMode={darkMode} nav={navigation} />
        <MoviesPosterScrollView sectionName={"Now Playing"} movies={movieNowPlaying} darkMode={darkMode} nav={navigation} />
        <Divider style={[darkMode?Style.lightDividerStyle:Style.darkDividerStyle,{ marginVertical: 8 }]} />
        <MoviesScrollView movies={movieTopRated} nav={navigation} darkMode={darkMode}/>

      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.GlobalSettings.darkMode
  }
}

export default connect(mapStateToProps)(ExploreScreen);

