import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid-random';

// app components
import { MonoText, MonoTextBold } from '../components/StyledText';
import DataLoadingComponent from '../components/DataLoadingComponent';
import DataErrorComponent from '../components/DataErrorComponent';
import MultipleMovieCard from '../components/movieCards/MultipleMovieCard';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

import { useQuery } from '@apollo/react-hooks';

// GraphQL Queries
import * as GQL_QUERIES from '../gqlQueries'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w780/';

import {connect} from 'react-redux';

function MultipleMoviesScreen({ navigation, route, darkMode }) {
  
  // =================================================================
  // React Hooks

  
  // =================================================================
  // useQuery Hooks
  const moviesResponse = useQuery(GQL_QUERIES[route.params.query], { variables: { params: route.params.variables } });

  // =================================================================
  // Rendering loading component when data is loading 
  if (moviesResponse.loading) return <DataLoadingComponent darkMode={darkMode} />;
  
  // =================================================================
  // Rendering loading component when data is refetching 
  if (moviesResponse.networkStatus == 4) return <DataLoadingComponent />;
  
  // =================================================================
  // Rendering error component if at least one error occurs 
  if (moviesResponse.error) return <DataErrorComponent props={moviesResponse}/>;

  // =================================================================
  // DESTRUCTURING RESPONSE OBJECTS
  const movies = moviesResponse.data[Object.keys(moviesResponse.data)[0]];

  // console.log(movies)
  
  const getReleaseDate = () => movieInfo.release_date?" (" + movieInfo.release_date.substring(0,4) + ")":"";
  
  // =================================================================
  // SCREEN RENDERING
  
  return (
    <View style={darkMode?Style.darkContainer:Style.lightContainer}>
      <FlatList
        style={[darkMode?Style.darkContainer:Style.lightContainer,{ flex: 1 }]}
        contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
        numColumns={3}
        data={[...movies, { filler: true }]}
        keyExtractor={(movies) => movies.id}
        renderItem={({item}) => <MultipleMovieCard props={item} nav={navigation} darkMode={darkMode} />}
      />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.GlobalSettings.darkMode
  }
}

export default connect(mapStateToProps)(MultipleMoviesScreen);
