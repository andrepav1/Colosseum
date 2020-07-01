import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// app components
import { MonoText, MonoTextBold } from '../components/StyledText';
import DataLoadingComponent from '../components/DataLoadingComponent';
import DataErrorComponent from '../components/DataErrorComponent';
import MoviesPosterScrollView from '../components/MoviesPosterScrollView';
import MoviesCastScrollView from '../components/MoviesCastScrollView';
import MoviesImagesCarousel from '../components/MoviesImagesCarousel';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

import { useQuery } from '@apollo/react-hooks';

// GraphQL Queries
import { 
  PERSON_INFO,
} from '../gqlQueries'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w780/';

import {connect} from 'react-redux';

function PersonScreen({ navigation, route, darkMode }) {
  
  // =================================================================
  // React Hooks


  // =================================================================
  // useQuery Hooks
  const personInfoResponse = useQuery(PERSON_INFO, { variables: { id: route.params.id }});

  // =================================================================
  // Rendering loading component when data is loading 
  if (personInfoResponse.loading) return <DataLoadingComponent />;
  
  // =================================================================
  // Rendering loading component when data is refetching 
  if (personInfoResponse.networkStatus == 4) return <DataLoadingComponent />;
  
  // =================================================================
  // Rendering error component if at least one error occurs 
  if (personInfoResponse.error) return <DataErrorComponent props={personInfoResponse}/>;

  // =================================================================
  // DESTRUCTURING RESPONSE OBJECTS
  const { data: { personInfo }} = personInfoResponse;
  
  console.log(personInfo)
  
  // =================================================================
  // SCREEN RENDERING
  
  return (
    <View style={{ flex:1 }}>
      <ScrollView style={darkMode?Style.darkContainer:Style.lightContainer} contentContainerStyle={{paddingTop: 0 }}>
      
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
