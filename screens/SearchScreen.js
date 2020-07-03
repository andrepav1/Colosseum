import * as React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Button } from 'react-native';
import SearchHeader from 'react-native-search-header';
import { ScrollView } from 'react-native-gesture-handler';

// app components
import { MonoText, MonoTextBold } from '../components/StyledText';

// constants
import Style from '../constants/Style'
import Color from '../constants/Colors'
import Layout from '../constants/Layout'
const { width, height } = Layout.window;

import {connect} from 'react-redux';

function SearchScreen({ navigation, darkMode }) {

  const onSearchHandler = ({nativeEvent:{text}}) => {
    navigation.navigate('Explore', {
      screen: 'MultipleMoviesScreen',
      params: { query: "SEARCH_MOVIE", variables: { query: text, page: 1 }}
    });
  }

  return (
    <View style={darkMode?Style.darkContainer:Style.lightContainer}>
      <SearchHeader
        style = {{
          header: {
            width: width*0.94,
            alignSelf: "center",
            borderRadius: 4,
            height: 44,
            backgroundColor: darkMode?'#44444444':'#FFF',
            marginTop: 4,
            marginBottom: 2
          },
          suggestion: {
            fontFamily: "montserrat-regular",
            fontSize: 14,
            backgroundColor: darkMode?'#020202CF':'#FFF',
          },
          input: darkMode?Style.mediumLightText:Style.mediumDarkText,
          suggestionEntry: {
            ...darkMode?Style.smallLightText:Style.smallDarkText,
            paddingVertical: 8,
          },
        }}
        suggestionHistoryEntryRollOverCount={4}
        persistent={true}
        autoFocus={true}
        visibleInitially={true}
        placeholder = 'Search...'
        placeholderColor={"grey"}
        onSearch={onSearchHandler}
        onGetAutocompletions = {async (text) => {
          if (text) {
            const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=c781a3dabef946805a961db3b7b916eb&query=' + text, {
              method: 'GET'
            });
            const data = await response.json();
            return data.results.map(item => item.title);
          } else {
            return [];
          }
        }}
      />
    </View>
  );
} 

const mapStateToProps = (state) => {
  return {
    darkMode: state.GlobalSettings.darkMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDarkMode: (darkMode) => dispatch({
      type: 'SET_DARK_MODE',
      payload: { darkMode },
      target: "GlobalSettings"
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)

const styles = StyleSheet.create({
  label: {
    flexGrow: 1,
    fontSize: 20,
    fontWeight: `600`,
    textAlign: `left`,
    marginVertical: 8,
    paddingVertical: 3,
    color: `#f5fcff`,
    backgroundColor: `transparent`
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 40,
    marginTop: 40,
    borderRadius: 2,
    backgroundColor: `#ff5722`
  }
});
