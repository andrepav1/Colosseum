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
  DISCOVER_MOVIE,
} from '../gqlQueries'

import {connect} from 'react-redux';

function ExploreScreen({ navigation, route, darkMode }) {

  // =================================================================
  // React Hooks 
  const [carouselLoaded, setCarouselLoaded] = React.useState(false);

  const [refreshing, setRefreshing] = React.useState(false);
    
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    for(const index of Object.keys(responses)) { 
      responses[index].refetch().catch((e) => console.log("promise rejected:", e));
    };
    
    setTimeout(() => setRefreshing(false), 200);
  }, [refreshing]);

  // =================================================================
  // useQuery hooks
  const responses = {
    popularMoviesResponse: useQuery(MOVIE_POPULAR),
    topRatedMoviesResponse: useQuery(MOVIE_TOP_RATED),
    movieNowPlayingResponse: useQuery(MOVIE_NOW_PLAYING),
    movieActionResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "28" }}}),
    movieAdventureResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "12" }}}),
    movieAnimationResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "16" }}}),
    movieComediesResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "35" }}}),
    movieCrimeResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "80" }}}),
    movieDocumentariesResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "99" }}}),
    movieDramasResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "18" }}}),
    movieFamilyResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "10751" }}}),
    movieFantasyResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "14" }}}),
    movieHistoryResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "36" }}}),
    movieHorrorResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "27" }}}),
    movieMusicResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "10402" }}}),
    movieMisteryResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "9648" }}}),
    movieRomanceResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "10749" }}}),
    movieScienceFictionResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "878" }}}),
    movieTVResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "10770" }}}),
    movieThrillerResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "53" }}}),
    movieWarResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "10752" }}}),
    movieWesternResponse: useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: "37" }}}),
  };

  // =================================================================
  // Rendering loading component when data is loading 
  for(const index of Object.keys(responses)) { if (responses[index].loading) return <DataLoadingComponent darkMode={darkMode} /> };
  // =================================================================
  // Rendering loading component when data is refetching 
  for(const index of Object.keys(responses)) { if (responses[index].networkStatus == 4) return <DataLoadingComponent darkMode={darkMode} /> };
  // =================================================================
  // Rendering error component if at least one error occurs 
  for(const index of Object.keys(responses)) { if (responses[index].error) return <DataErrorComponent props={responses[index]} darkMode={darkMode} /> };
  // =================================================================
  // DESTRUCTURING RESPONSE OBJECTS
  const { data: { moviePopular }} = responses.popularMoviesResponse;
  const { data: { movieTopRated }} = responses.topRatedMoviesResponse;
  const { data: { movieNowPlaying }} = responses.movieNowPlayingResponse;
  
  const { data: { discoverMovie: { results: movieAction }}} = responses.movieActionResponse;
  const { data: { discoverMovie: { results: movieAdventure }}} = responses.movieAdventureResponse;
  const { data: { discoverMovie: { results: movieAnimation }}} = responses.movieAnimationResponse;
  const { data: { discoverMovie: { results: movieComedies }}} = responses.movieComediesResponse;
  const { data: { discoverMovie: { results: movieCrime }}} = responses.movieCrimeResponse;
  const { data: { discoverMovie: { results: movieDocumentaries }}} = responses.movieDocumentariesResponse;
  const { data: { discoverMovie: { results: movieDramas }}} = responses.movieDramasResponse;
  const { data: { discoverMovie: { results: movieFamily }}} = responses.movieFamilyResponse;
  const { data: { discoverMovie: { results: movieFantasy }}} = responses.movieFantasyResponse;
  const { data: { discoverMovie: { results: movieHistory }}} = responses.movieHistoryResponse;
  const { data: { discoverMovie: { results: movieHorror }}} = responses.movieHorrorResponse;
  const { data: { discoverMovie: { results: movieMusic }}} = responses.movieMusicResponse;
  const { data: { discoverMovie: { results: movieMistery }}} = responses.movieMisteryResponse;
  const { data: { discoverMovie: { results: movieRomance }}} = responses.movieRomanceResponse;
  const { data: { discoverMovie: { results: movieScienceFiction }}} = responses.movieScienceFictionResponse;
  const { data: { discoverMovie: { results: movieTV }}} = responses.movieTVResponse;
  const { data: { discoverMovie: { results: movieThriller }}} = responses.movieThrillerResponse;
  const { data: { discoverMovie: { results: movieWar }}} = responses.movieWarResponse;
  const { data: { discoverMovie: { results: movieWestern }}} = responses.movieWesternResponse;
  
  // =================================================================
  // SCREEN RENDERING
  
  return (
    <View style={{ flex:1 }}>
      <ScrollView style={darkMode?Style.darkContainer:Style.lightContainer} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> }>

        <MoviesCarousel movies={movieCrime} nav={navigation} setLoaded={setCarouselLoaded}/>

        <MoviesPosterScrollView sectionName={"Popular Movies"} movies={moviePopular} darkMode={darkMode} nav={navigation} />
        <MoviesPosterScrollView sectionName={"Now Playing"} movies={movieNowPlaying} darkMode={darkMode} nav={navigation} />

        <Divider style={[darkMode?Style.lightDividerStyle:Style.darkDividerStyle,{ marginVertical: 4 }]} />

        <MoviesScrollView movies={movieAction} nav={navigation} darkMode={darkMode}/>
        <MoviesPosterScrollView sectionName={"Comedies"} movies={movieComedies} darkMode={darkMode} nav={navigation} />
        <MoviesPosterScrollView sectionName={"Dramas"} movies={movieDramas} darkMode={darkMode} nav={navigation} />
        <MoviesPosterScrollView sectionName={"Thriller"} movies={movieThriller} darkMode={darkMode} nav={navigation} />
        
        <Divider style={[darkMode?Style.lightDividerStyle:Style.darkDividerStyle,{ marginVertical: 4 }]} />
        
        <MoviesPosterScrollView sectionName={"Fantasy"} movies={movieFantasy} darkMode={darkMode} nav={navigation} />
        <MoviesPosterScrollView sectionName={"Science Fiction"} movies={movieScienceFiction} darkMode={darkMode} nav={navigation} />
        <MoviesPosterScrollView sectionName={"War Movies"} movies={movieWar} darkMode={darkMode} nav={navigation} />
        
        <Divider style={[darkMode?Style.lightDividerStyle:Style.darkDividerStyle,{ marginVertical: 4 }]} />
        
        <MoviesPosterScrollView sectionName={"Romances"} movies={movieRomance} darkMode={darkMode} nav={navigation} />
        <MoviesPosterScrollView sectionName={"Horror Movies"} movies={movieHorror} darkMode={darkMode} nav={navigation} />
        <MoviesPosterScrollView sectionName={"Musicals"} movies={movieMusic} darkMode={darkMode} nav={navigation} />
        
        <Divider style={[darkMode?Style.lightDividerStyle:Style.darkDividerStyle,{ marginVertical: 4 }]} />
        
        <MoviesPosterScrollView sectionName={"Mistery"} movies={movieMistery} darkMode={darkMode} nav={navigation} />
        <MoviesPosterScrollView sectionName={"Western"} movies={movieWestern} darkMode={darkMode} nav={navigation} />
        <MoviesPosterScrollView sectionName={"Documentaries"} movies={movieDocumentaries} darkMode={darkMode} nav={navigation} />

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

