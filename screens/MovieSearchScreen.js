import * as React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Button } from 'react-native';
import SearchHeader from 'react-native-search-header';
import { ScrollView } from 'react-native-gesture-handler';

// app components
import { MonoText, MonoTextBold } from '../components/StyledText';
import FiltersView from '../components/FiltersView';

// constants
import Style from '../constants/Style'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'
const { width, height } = Layout.window;

import {connect} from 'react-redux';

function MovieSearchScreen({ navigation, darkMode }) {

  const filters = [
    { name: "Country", options: [{name: "Kenya"},{name: "Italy"},{name: "USA"}, {name: "Canada"}, {name: "Moon"}, {name: "Finland"}] },
    { name: "Year", options: [{ name: 1995 }, { name: 1996 }, { name: 1997 }, { name: 1998 }, { name: 1999 }, { name: 2000 }, { name: 2001 }, { name: 2002 }, { name: 2003 }, { name: 2004 }, { name: 2005 },] },
    { name: "Language", options: [{name: "English"},{name: "Korean"},{name: "Spanish"},{name: "French"},{name: "Italian"},{name: "Russian"},{name: "Japanese"}] },
  ];

  const onSearchHandler = ({nativeEvent:{text}}) => {
    
    console.log("search");
    
    navigation.navigate('Explore', {
      screen: 'MultipleMoviesScreen',
      params: { query: "SEARCH_MOVIE", variables: { query: text, page: 1 }}
    });
  }

  return (
    <View style={[darkMode?Style.darkContainer:Style.lightContainer,{ backgroundColor: darkMode?Colors.darkHeaderColor:Colors.lightHeaderColor }]}>
      <SearchHeader
        style = {{
          container: {
            backgroundColor: darkMode?Colors.darkHeaderColor:Colors.lightHeaderColor
          },
          header: {
            width: width*0.92,
            alignSelf: "center",
            borderRadius: 4,
            height: 44,
            backgroundColor: darkMode?'#44444466':'#88888822',
            marginBottom: 8
          },
          input: darkMode?Style.mediumLightText:Style.mediumDarkText,
          suggestionEntry: {
            ...darkMode?Style.smallLightText:Style.smallDarkText,
            paddingVertical: 8,
          },
        }}
        FilterView={() => <FiltersView filters={filters} nav={navigation} darkMode={darkMode} />}
        suggestionHistoryEntryRollOverCount={3}
        persistent={true}
        autoFocus={true}
        visibleInitially={true}
        placeholder = 'Search...'
        placeholderColor={"grey"}
        darkMode={darkMode}
        onSearch={onSearchHandler}
        onGetAutocompletions = {async (text) => {
          console.log("autocomplete");
          
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearchScreen)
