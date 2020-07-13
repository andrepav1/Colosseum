import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid-random';
import { useQuery } from '@apollo/react-hooks';

// app components
import { MonoText, MonoTextBold } from '../StyledText';

// constants
import Colors from '../../constants/Colors';
import Style from '../../constants/Style';
import Layout from '../../constants/Layout';
const { width, height } = Layout.window;

import { 
  SEASON_INFO
} from '../../gqlQueries'

export default function TVSeasonCard({season, tvShow, darkMode, nav}) {
  
  const seasonInfoResponse = useQuery(SEASON_INFO, { variables: { tv_id: tvShow.id, season_number: season } });

  // =================================================================
  // Rendering loading component when data is loading 
  if(seasonInfoResponse.loading) return null;
  // =================================================================
  // Rendering error component if at least one error occurs 
  if(seasonInfoResponse.error) return null;
  // =================================================================
  // DESTRUCTURING RESPONSE OBJECTS
  const { data: { seasonInfo }} = seasonInfoResponse;

  // =================================================================
  // SCREEN RENDERING

  return (
    <View style={styles.seasonContainer}>
      <View style={{ paddingHorizontal: 16 }}>
      {
        seasonInfo.episodes.map(episode => (
          <View key={uuid()} style={{ }}>
            <MonoTextBold style={{ paddingVertical: 4 }}>{episode.episode_number}.  {episode.name}</MonoTextBold>
          </View>
        ))
      }
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  seasonContainer: {
    flex: 1, 
    flexDirection: "column", 
    width: width,
    // backgroundColor: "red"
  }
});