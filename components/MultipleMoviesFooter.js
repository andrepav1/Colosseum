import * as React from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import uuid from 'uuid-random';

import { MonoText, MonoTextBold } from './StyledText'

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

export default function MultipleMoviesFooter({ page, total_pages, total_results, darkMode, refetch, variables, pageNumberPressedHandler }) {
  
  const getPageNumberContainer = (currPage, extraStyle) => {
    return (
      <TouchableOpacity onPress={() => onPagePressedHandler(currPage)}>
        <View style={[styles.pageNumberContainer, { ...extraStyle }, { backgroundColor: currPage===page?"#00000055":"#88888833" }]}>
          <MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>{currPage}</MonoTextBold>
        </View>
      </TouchableOpacity>
    );
  }

  const onPagePressedHandler = (_page) => {
    pageNumberPressedHandler();
    variables.page = _page;
    refetch(variables); 
    console.log(variables);
  }

  switch (total_pages) {
    case 0:
      return (
        <View style={styles.footerContainer}>
          <MonoText style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ marginTop: 24 }]}>No Results Found</MonoText>
        </View>
      );
    case 1:
      return (
        <View style={styles.footerContainer}>
        { getPageNumberContainer(1) }
        </View>
      );
    case 2:
      return (
        <View style={styles.footerContainer}>
        { getPageNumberContainer(1) }
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
        { getPageNumberContainer(2) }
        </View>
      );
    case 3:
      return (
        <View style={styles.footerContainer}>
        { getPageNumberContainer(1) }
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
        { getPageNumberContainer(2) }
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
        { getPageNumberContainer(3) }
        </View>
      );
    case 4:
      return (
        <View style={styles.footerContainer}>
        { getPageNumberContainer(1) }
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
        { getPageNumberContainer(2) }
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
        { getPageNumberContainer(3) }
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
        { getPageNumberContainer(4) }
        </View>
      );
    case 5:
      return (
        <View style={styles.footerContainer}>
        { getPageNumberContainer(1) }
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
        { getPageNumberContainer(2) }
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
        { getPageNumberContainer(3) }
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
        { getPageNumberContainer(4) }
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
        { getPageNumberContainer(5) }
        </View>
      );
    case 6:
      return (
        <View style={styles.footerContainer}>
        { getPageNumberContainer(1, { right: 38 }) }
        { getPageNumberContainer(2) }
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
        { getPageNumberContainer(3) }
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
        { getPageNumberContainer(4) }
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
        { getPageNumberContainer(5) }
        { getPageNumberContainer(6, { left: 38 }) }  
      </View>
      );
    default:
      break;
  }
  

  let startingPage = page<4?2:page-2;
  startingPage = startingPage+5 > total_pages?total_pages-5:startingPage;

  return (
    <View style={styles.footerContainer}>
    { getPageNumberContainer(1, { right: 16 }) }
    { getPageNumberContainer(startingPage) }
      <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
    { getPageNumberContainer(startingPage+1) }
      <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
    { getPageNumberContainer(startingPage+2) }
      <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
    { getPageNumberContainer(startingPage+3) }
      <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
    { getPageNumberContainer(startingPage+4) }
    { getPageNumberContainer(total_pages,{ left: 16 }) }
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row", 
    justifyContent: "center", 
    alignSelf: "center", 
    height: 60,
    width: width,
  },
  pageNumberContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 2,
    marginTop: 12,
    marginHorizontal: 2,
  },
  dividerCircle: {
    height: 6, 
    width: 6, 
    borderRadius: 3, 
    backgroundColor: '#444444AA'
  }
});