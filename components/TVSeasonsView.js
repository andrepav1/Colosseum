import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid-random';

// app components
import TVSeasonCard from './movieCards/TVSeasonCard';
import { MonoText, MonoTextBold } from './StyledText';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

import { useQuery } from '@apollo/react-hooks';

import { 
  SEASON_INFO
} from '../gqlQueries'

export default function TVSeasonsView({tvShow, variables, darkMode, nav}) {
  
  React.useEffect(()=> { tvShow.seasons.push(tvShow.seasons.shift()) },[]);

  const [seasonVisible, setSeasonVisible] = React.useState(2);

  const onSeasonPressedHandler = (season_number) => {
    setSeasonVisible(season_number);
  }

  return (
    <View style={{ marginVertical: 8 }}>

      <View style={{ flexDirection: "row", paddingHorizontal: 16, marginBottom: 8 }}>  
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {
            tvShow.seasons.map(season => (
              <TouchableOpacity onPress={() => onSeasonPressedHandler(season.season_number)} key={uuid()}>
                <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ textAlign: "left", paddingRight: 8 }]}>{season.name}</MonoTextBold>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>

      <View>
        <TVSeasonCard tvShow={tvShow} season={seasonVisible} nav={nav} darkMode={darkMode} onSeasonPressedHandler={onSeasonPressedHandler} />
      </View>

    </View>
  );
}