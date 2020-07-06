import * as React from 'react';
import { Image, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import CardFlip from 'react-native-card-flip';

import { MonoText, MonoTextBold } from '../StyledText'

// constants
import Colors from '../../constants/Colors';
import Style from '../../constants/Style';
import Layout from '../../constants/Layout';
import {assignNumbersArrayToGenre} from '../../constants/MovieData';
const { width, height } = Layout.window;

const POSTER_PATH = 'http://image.tmdb.org/t/p/w780/';

export default function MovieDeckCard({props, darkMode, nav }) {

  const [card, setCard] = React.useState();
  const [genres, setGenres] = React.useState(assignNumbersArrayToGenre(props.genre_ids));
  
  const onSeeMorePressedHandler = () => {
      nav.navigate('Explore', {
      screen: 'MovieScreen',
      params: props
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <CardFlip flipDirection={'x'} style={{ width: width-40, height: 540 }} ref={card => setCard(card)} >
        <TouchableWithoutFeedback onPress={() => card.flip()} >
          <View style={[darkMode?Style.darkCardContainer:Style.lightCardContainer, { flex: 1 }]}>
            <View style={styles.imageView}>
              <Image style={{ resizeMode: "center", height: 480, borderRadius: 8 }} source={{ uri: POSTER_PATH + props.poster_path}} />
            </View>
            <View style={styles.smallTextView}>
              <MonoTextBold style={[darkMode?Style.largeLightText:Style.largeDarkText, { textAlign: "center", maxWidth: "90%"}]}>{props.title}</MonoTextBold>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => card.flip()} >
          <View style={[darkMode?Style.darkCardContainer:Style.lightCardContainer, { flex: 1 }]}>
            <View style={styles.textView}>
              <MonoTextBold style={[ darkMode?Style.largeLightText:Style.largeDarkText, { textAlign: "center", maxWidth: "90%", marginBottom: 16, marginTop: 20 }]}>{props.title}</MonoTextBold>
              <MonoTextBold style={[ darkMode?Style.smallLightText:Style.smallDarkText, { textAlign: "center", maxWidth: "90%"}]}>{props.overview}</MonoTextBold>
            </View>
            
            <TouchableWithoutFeedback onPress={onSeeMorePressedHandler} >
              <View style={{ width: 140, alignSelf: "center" }}>
                <MonoTextBold style={[ darkMode?Style.mediumLightText:Style.mediumDarkText, { textAlign: "center", paddingVertical: 16, }]}>See More</MonoTextBold>
              </View>
            </TouchableWithoutFeedback> 
          </View>
        </TouchableWithoutFeedback>
      </CardFlip> 
    </View>
  );
}

    // <CardFlip style={[Style.lightCardContainer, { width: width-40, height: 540, alignSelf: "center" }]} ref={card => setCard(card)} >

    // </CardFlip>
const styles = StyleSheet.create({
  imageView: {
    alignSelf: "center",
    width: "100%",
    overflow: "hidden",
  },
  textView: {
    flex: 1,
    alignItems: "center",
  },
  smallTextView: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    color: "#000",
    fontSize: 22, 
    maxWidth: "90%",
    textAlign: "center"
  },
  description: {
    color: "#000",
    fontSize: 12, 
    maxWidth: "90%",
  }
});
