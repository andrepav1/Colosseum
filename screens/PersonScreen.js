import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// app components
import { MonoText, MonoTextBold } from '../components/StyledText';
import DataLoadingComponent from '../components/DataLoadingComponent';
import DataErrorComponent from '../components/DataErrorComponent';
import MoviesPosterImagesCarousel from '../components/MoviesPosterImagesCarousel';
import PersonMoviesCastScrollView from '../components/PersonMoviesCastScrollView';
import PersonMoviesCrewScrollView from '../components/PersonMoviesCrewScrollView';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

import { useQuery } from '@apollo/react-hooks';

// GraphQL Queries
import { 
  PERSON_INFO,
  PERSON_MOVIE_CREDITS,
  PERSON_IMAGES
} from '../gqlQueries'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w780/';

import {connect} from 'react-redux';

function PersonScreen({ navigation, route, darkMode }) {
  
  // =================================================================
  // React Hooks


  // =================================================================
  // useQuery Hooks
  const personInfoResponse = useQuery(PERSON_INFO, { variables: { id: route.params.id }});
  const personMovieCreditsResponse = useQuery(PERSON_MOVIE_CREDITS, { variables: { id: route.params.id }});
  const personImagesResponse = useQuery(PERSON_IMAGES, { variables: { id: route.params.id }});

  // =================================================================
  // Rendering loading component when data is loading 
  if (personInfoResponse.loading) return <DataLoadingComponent />;
  if (personMovieCreditsResponse.loading) return <DataLoadingComponent />;
  if (personImagesResponse.loading) return <DataLoadingComponent />;
  
  // =================================================================
  // Rendering loading component when data is refetching 
  if (personInfoResponse.networkStatus == 4) return <DataLoadingComponent />;
  if (personMovieCreditsResponse.networkStatus == 4) return <DataLoadingComponent />;
  if (personImagesResponse.networkStatus == 4) return <DataLoadingComponent />;
  
  // =================================================================
  // Rendering error component if at least one error occurs 
  if (personInfoResponse.error) return <DataErrorComponent props={personInfoResponse}/>;
  if (personMovieCreditsResponse.error) return <DataErrorComponent props={personMovieCreditsResponse}/>;
  if (personImagesResponse.error) return <DataErrorComponent props={personImagesResponse}/>;

  // =================================================================
  // DESTRUCTURING RESPONSE OBJECTS
  const { data: { personInfo }} = personInfoResponse;
  const { data: { personMovieCredits: { crew: crewMovies, cast: castMovies } }} = personMovieCreditsResponse;
  const { data: { personImages }} = personImagesResponse;
  
  // console.log(personInfo)
  // console.log(personMovieCredits)
  // console.log(personImages)
  
  // =================================================================
  // SCREEN RENDERING
  
  return (
    <View style={{ flex:1 }}>
      <ScrollView style={darkMode?Style.darkContainer:Style.lightContainer} contentContainerStyle={{paddingTop: 0 }}>
      
        <PersonMoviesCastScrollView movies={castMovies} nav={navigation} darkMode={darkMode} />
        
        <PersonMoviesCrewScrollView movies={crewMovies} nav={navigation} darkMode={darkMode} />
        
        <MoviesPosterImagesCarousel images={personImages} nav={navigation} darkMode={darkMode} />
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.GlobalSettings.darkMode
  }
}

export default connect(mapStateToProps)(PersonScreen);
