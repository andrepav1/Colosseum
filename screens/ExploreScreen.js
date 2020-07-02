import * as React from 'react';
import { StyleSheet, TouchableOpacity, RefreshControl, View } from 'react-native';
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
  DISCOVER_MOVIE
} from '../gqlQueries'

import {connect} from 'react-redux';

function ExploreScreen({ navigation, route, darkMode }) {

  // =================================================================
  // React Hooks 
  const [carouselLoaded, setCarouselLoaded] = React.useState(false);

  const [refreshing, setRefreshing] = React.useState(false);
    
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    popularMoviesResponse.refetch().catch((e) => console.log("promise rejected:", e));
    topRatedMoviesResponse.refetch().catch((e) => console.log("promise rejected:", e));
    movieNowPlayingResponse.refetch().catch((e) => console.log("promise rejected:", e));
    movieComediesResponse.refetch({ variables: { params: { with_genres: "35" }}}).catch((e) => console.log("promise rejected:", e));
    
    setTimeout(() => setRefreshing(false), 200);
  }, [refreshing]);

  // =================================================================
  // useQuery Hooks
  const popularMoviesResponse = useQuery(MOVIE_POPULAR);
  const topRatedMoviesResponse = useQuery(MOVIE_TOP_RATED);
  const movieNowPlayingResponse = useQuery(MOVIE_NOW_PLAYING);
  const movieComediesResponse = useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "35" }}});

  // =================================================================
  // Rendering loading component when data is loading 
  if (popularMoviesResponse.loading) return <DataLoadingComponent />;
  if (topRatedMoviesResponse.loading) return <DataLoadingComponent />;
  if (movieNowPlayingResponse.loading) return <DataLoadingComponent />;
  if (movieComediesResponse.loading) return <DataLoadingComponent />;

  
  // =================================================================
  // Rendering loading component when data is refetching 
  // if (popularMoviesResponse.networkStatus == 4) return <DataLoadingComponent />;
  // if (topRatedMoviesResponse.networkStatus == 4) return <DataLoadingComponent />;
  // if (movieNowPlayingResponse.networkStatus == 4) return <DataLoadingComponent />;
  // if (movieComediesResponse.networkStatus == 4) return <DataLoadingComponent />;
  
  // =================================================================
  // Rendering error component if at least one error occurs 
  if (popularMoviesResponse.error) return <DataErrorComponent props={popularMoviesResponse} />;
  if (topRatedMoviesResponse.error) return <DataErrorComponent props={topRatedMoviesResponse}/>;
  if (movieNowPlayingResponse.error) return <DataErrorComponent props={movieNowPlayingResponse} />;
  if (movieComediesResponse.error) return <DataErrorComponent props={movieNowPlayingResponse} />;

  // =================================================================
  // DESTRUCTURING RESPONSE OBJECTS
  const { data: { moviePopular }} = popularMoviesResponse;
  const { data: { movieTopRated }} = topRatedMoviesResponse;
  const { data: { movieNowPlaying }} = movieNowPlayingResponse;
  const { data: { discoverMovie: movieComedies }} = movieComediesResponse;
  
  // =================================================================
  // SCREEN RENDERING
  
  return (
    <View style={{ flex:1 }}>
      <ScrollView style={darkMode?Style.darkContainer:Style.lightContainer} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> }>

        <MoviesCarousel movies={moviePopular} nav={navigation} setLoaded={setCarouselLoaded}/>

        <MoviesPosterScrollView sectionName={"Popular Movies"} movies={moviePopular} darkMode={darkMode} nav={navigation} />
        <MoviesPosterScrollView sectionName={"Now Playing"} movies={movieNowPlaying} darkMode={darkMode} nav={navigation} />
        <Divider style={[darkMode?Style.lightDividerStyle:Style.darkDividerStyle,{ marginVertical: 8 }]} />
        <MoviesScrollView movies={movieTopRated} nav={navigation} darkMode={darkMode}/>
        <MoviesPosterScrollView sectionName={"Comedies"} movies={movieComedies} darkMode={darkMode} nav={navigation} />

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

