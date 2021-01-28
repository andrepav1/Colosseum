import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import { MonoText, MonoTextBold } from '../StyledText'

// constants
import Colors from '../../constants/Colors';
import Style from '../../constants/Style';
import Layout from '../../constants/Layout';
const { width, height } = Layout.window;

const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w780/';

export default function MovieVideoCarouselCard({props, nav, darkMode}) {

  // console.log(props);

  const aspectRatio = 0.57;
  const playerWidth = width*0.95;
  const playerHeight = playerWidth* aspectRatio;

  const playerRef = React.useRef();

  const [playing, setPlaying] = React.useState(true);

  React.useEffect(() => {
    return nav.addListener('blur', () => setPlaying(false));
  }, [nav]);

  React.useEffect(() => {
    return nav.addListener('focus', () => setPlaying(true));
  }, [nav]);

  return (
    <View style={{ }}>
      {
        playing &&
        <YoutubePlayer
          ref={playerRef}
          height={playerHeight}
          width={playerWidth}
          videoId={props.key}
          play={false}
          volume={0}
          onChangeState={console.log}
        />
      }
    </View>
  );
}
