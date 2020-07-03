import * as React from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import uuid from 'uuid-random';

import { MonoText, MonoTextBold } from './StyledText'

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

export default function MultipleMoviesFooter({ page, total_pages, total_results, darkMode, refetch, variables }) {
  
  const onPagePressedHandler = (_page) => {
    refetch({ params: { ...variables, page: _page }});
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
          <TouchableOpacity onPress={() => onPagePressedHandler(1)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>1</MonoTextBold></View>
          </TouchableOpacity>
        </View>
      );
    case 2:
      return (
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => onPagePressedHandler(1)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>1</MonoTextBold></View>
          </TouchableOpacity>
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
          <TouchableOpacity onPress={() => onPagePressedHandler(2)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>2</MonoTextBold></View>
          </TouchableOpacity>
        </View>
      );
    case 3:
      return (
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => onPagePressedHandler(1)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>1</MonoTextBold></View>
          </TouchableOpacity>
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
          <TouchableOpacity onPress={() => onPagePressedHandler(2)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>2</MonoTextBold></View>
          </TouchableOpacity>
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
          <TouchableOpacity onPress={() => onPagePressedHandler(3)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>3</MonoTextBold></View>
          </TouchableOpacity>
        </View>
      );
    case 4:
      return (
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => onPagePressedHandler(1)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>1</MonoTextBold></View>
          </TouchableOpacity>
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
          <TouchableOpacity onPress={() => onPagePressedHandler(2)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>2</MonoTextBold></View>
          </TouchableOpacity>
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
          <TouchableOpacity onPress={() => onPagePressedHandler(3)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>3</MonoTextBold></View>
          </TouchableOpacity>
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
          <TouchableOpacity onPress={() => onPagePressedHandler(4)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>4</MonoTextBold></View>
          </TouchableOpacity>
        </View>
      );
    case 5:
      return (
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => onPagePressedHandler(1)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>1</MonoTextBold></View>
          </TouchableOpacity>
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
          <TouchableOpacity onPress={() => onPagePressedHandler(2)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>2</MonoTextBold></View>
          </TouchableOpacity>
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
          <TouchableOpacity onPress={() => onPagePressedHandler(3)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>3</MonoTextBold></View>
          </TouchableOpacity>
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
          <TouchableOpacity onPress={() => onPagePressedHandler(4)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>4</MonoTextBold></View>
          </TouchableOpacity>
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
          <TouchableOpacity onPress={() => onPagePressedHandler(5)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>5</MonoTextBold></View>
          </TouchableOpacity>
        </View>
      );
    case 6:
      return (
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => onPagePressedHandler(1)}>
            <View style={[styles.pageNumberContainer,{ right: 38 }]}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>1</MonoTextBold></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPagePressedHandler(2)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>2</MonoTextBold></View>
          </TouchableOpacity>
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
          <TouchableOpacity onPress={() => onPagePressedHandler(3)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>3</MonoTextBold></View>
          </TouchableOpacity>
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
          <TouchableOpacity onPress={() => onPagePressedHandler(4)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>4</MonoTextBold></View>
          </TouchableOpacity>
          <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>
          <TouchableOpacity onPress={() => onPagePressedHandler(5)}>
            <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>5</MonoTextBold></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPagePressedHandler(6)}>
            <View style={[styles.pageNumberContainer,{ left: 38 }]}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>6</MonoTextBold></View>
          </TouchableOpacity>
        </View>
      );
    default:
      break;
  }
  

  let startingPage = page<3?2:page-2;
  startingPage = startingPage+5 > total_pages?total_pages-5:startingPage;

  return (
    <View style={styles.footerContainer}>
    
      <TouchableOpacity onPress={() => onPagePressedHandler(1)}>
        <View style={[styles.pageNumberContainer,{ right: 16 }]}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>1</MonoTextBold></View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPagePressedHandler(startingPage)}>
        <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>{startingPage}</MonoTextBold></View>
      </TouchableOpacity>

      <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>

      <TouchableOpacity onPress={() => onPagePressedHandler(startingPage+1)}>
        <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>{startingPage+1}</MonoTextBold></View>
      </TouchableOpacity>

      <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>

      <TouchableOpacity onPress={() => onPagePressedHandler(startingPage+2)}>
        <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>{startingPage+2}</MonoTextBold></View>
      </TouchableOpacity>

      <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>

      <TouchableOpacity onPress={() => onPagePressedHandler(startingPage+3)}>
        <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>{startingPage+3}</MonoTextBold></View>
      </TouchableOpacity>

      <View style={[styles.pageNumberContainer, { backgroundColor: '#00000000', width: 10 }]}><View style={styles.dividerCircle}></View></View>

      <TouchableOpacity onPress={() => onPagePressedHandler(startingPage+4)}>
        <View style={styles.pageNumberContainer}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>{startingPage+4}</MonoTextBold></View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPagePressedHandler(total_pages)}>
        <View style={[styles.pageNumberContainer,{ left: 16 }]}><MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>{total_pages}</MonoTextBold></View>
      </TouchableOpacity>
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
    backgroundColor: "#88888833",
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