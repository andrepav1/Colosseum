import * as React from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';

import { MonoText, MonoTextBold } from './StyledText'

// constants
import Style from '../constants/Style'
import Layout from '../constants/Layout'
const { width, height } = Layout.window;

export default function MovieDeckCard({props, deckSwiper}) {
  // console.log(deckSwiper)

  return (
    <View style={[Style.lightCardContainer, { width: width-40, height: 510, alignSelf: "center" }]}>
      <View style={styles.imageView}>
        <Image style={{ resizeMode: "cover", width: "100%", height: "100%" }} source={props.image} />
      </View>
      <View style={styles.textView}>
        <MonoTextBold style={styles.title}>{props.title}</MonoTextBold>
        <MonoText style={styles.description}>{props.description}</MonoText>
      </View>

      {/* <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
        <TouchableOpacity onPress={() => deckSwiper._root.swipeLeft()}>
          <View>
            <MonoText>Swipe Left</MonoText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deckSwiper._root.swipeRight()}>
          <View>
            <MonoText>Swipe Right</MonoText>
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  imageView: {
    alignSelf: "center",
    width: "90%",
    marginTop: 16,
    height: 320,
  },
  textView: {
    flex: 1,
    alignItems: "center",
    marginTop: 4,
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
