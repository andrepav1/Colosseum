import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// app components
import { MonoText } from '../components/StyledText';
import DataLoadingComponent from '../components/DataLoadingComponent';
import DataErrorComponent from '../components/DataErrorComponent';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';

import { useQuery } from '@apollo/react-hooks';

// GraphQL Queries
import { 
  MOVIE_INFO,
} from '../gqlQueries'

import {connect} from 'react-redux';

function MovieScreen({ navigation, route, darkMode }) {

  // =================================================================
  // useQuery Hooks
  const MovieInfoResponse = useQuery(MOVIE_INFO, { variables: { id: route.params.id }});

  // =================================================================
  // Rendering loading component when data is loading 
  if (MovieInfoResponse.loading) return <DataLoadingComponent />;
  
  // =================================================================
  // Rendering loading component when data is refetching 
  if (MovieInfoResponse.networkStatus == 4) return <DataLoadingComponent />;
  
  // =================================================================
  // Rendering error component if at least one error occurs 
  if (MovieInfoResponse.error) return <DataErrorComponent />;

  // =================================================================
  // DESTRUCTURING RESPONSE OBJECTS
  const { data: { movieInfo }} = MovieInfoResponse;
  
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

export default connect(mapStateToProps)(MovieScreen);
