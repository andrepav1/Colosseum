import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid-random';

// app components
import { MonoText, MonoTextBold } from '../components/StyledText';
import DataLoadingComponent from '../components/DataLoadingComponent';
import DataErrorComponent from '../components/DataErrorComponent';
import MultipleMoviesFooter from '../components/MultipleMoviesFooter';
import MultipleMovieCard from '../components/movieCards/MultipleMovieCard';
import MultipleTVCard from '../components/movieCards/MultipleTVCard';
import MultiplePersonCard from '../components/movieCards/MultiplePersonCard';

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
  
  React.useEffect(() => navigation.setOptions({ title: "Results for " + route.params.titleQuery }));

  // =================================================================
  // useQuery Hooks
  const moviesResponse = useQuery(GQL_QUERIES[route.params.query], { variables: { params: route.params.variables }, fetchPolicy: 'no-cache' });

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
  
  const getReleaseDate = () => movieInfo.release_date?" (" + movieInfo.release_date.substring(0,4) + ")":"";

  const renderItem = ({item}) => {
    console.log(item);
    switch (item.media_type) {
      case "movie":   return <MultipleMovieCard props={item} darkMode={darkMode} nav={navigation} />;
      case "tv":      return <MultipleTVCard props={item} darkMode={darkMode} nav={navigation} />;
      case "person":  return <MultiplePersonCard props={item} darkMode={darkMode} nav={navigation} />;
      default:        return <MultipleMovieCard props={item} darkMode={darkMode} nav={navigation} />;
    }
  }

  // =================================================================
  // SCREEN RENDERING
  console.log();
  return (
    <View style={darkMode?Style.darkContainer:Style.lightContainer}>
      <FlatList
        contentContainerStyle={{ alignItems: "center" }}
        numColumns={2}
        ListFooterComponent={<MultipleMoviesFooter page={movies.page} total_pages={movies.total_pages} total_results={movies.total_results} variables={route.params.variables} refetch={moviesResponse.refetch} darkMode={darkMode} />}
        data={movies.results}
        keyExtractor={(data) => data.id} 
        renderItem={renderItem}
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
