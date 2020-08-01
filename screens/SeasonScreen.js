import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid-random';

// app components
import { MonoText, MonoTextBold } from '../components/StyledText';
import DataLoadingComponent from '../components/DataLoadingComponent';
import DataErrorComponent from '../components/DataErrorComponent';
import EpisodeCard from '../components/movieCards/EpisodeCard';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

import { useQuery } from '@apollo/react-hooks';

// GraphQL Queries
import {
  SEASON_INFO
} from '../gqlQueries'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w780/';

import {connect} from 'react-redux';

function SeasonScreen({ navigation, route, darkMode }) {
  // console.log(route.params);

  // =================================================================
  // React Hooks
  
  const flatListRef = React.useRef();

  React.useEffect(() => navigation.setOptions({ title: route.params.season_name }));

  // =================================================================
  // useQuery Hooks
  const seasonInfoResponse = useQuery(SEASON_INFO, { variables: { tv_id: route.params.tvShowId, season_number: route.params.season_number } });

  // =================================================================
  // Rendering loading component when data is loading 
  if(seasonInfoResponse.loading) return null;

  // =================================================================
  // Rendering error component if at least one error occurs 
  if(seasonInfoResponse.error) return null;

  // =================================================================
  // DESTRUCTURING RESPONSE OBJECTS
  const { data: { seasonInfo }} = seasonInfoResponse;

  const renderItem = ({item}) => {
    return (
      <View style={{ paddingVertical: 2 }}>
        <EpisodeCard episode={item} darkMode={darkMode} nav={navigation} />
      </View>
    );
  }
  // =================================================================
  // SCREEN RENDERING

  return (
    <View style={darkMode?Style.darkContainer:Style.lightContainer}>
      <FlatList
        ref={flatListRef}
        contentContainerStyle={{ alignItems: "center" }}
        data={seasonInfo.episodes}
        keyExtractor={uuid} 
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

export default connect(mapStateToProps)(SeasonScreen);
