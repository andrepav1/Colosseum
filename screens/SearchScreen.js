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

function SearchScreen({ navigation, darkMode }) {

 const filters = [];
  const onSuggestionPressedHandler = ({ nativeEvent }) => {
    switch (nativeEvent.type) {
      case "history": return;
      case "tv": return navigation.navigate('Explore', { screen: 'TVShowScreen', params: { id: nativeEvent.id }});
      case "movie": return navigation.navigate('Explore', { screen: 'MovieScreen', params: { id: nativeEvent.id }});
      case "person": return navigation.navigate('Explore', { screen: 'PersonScreen', params: { id: nativeEvent.id }});
    }
    
  }

  const onSearchHandler = ({nativeEvent:{text}}) => {
    navigation.navigate('Explore', {
      screen: 'MultipleMoviesScreen',
      params: { query: "SEARCH_MOVIE", variables: { query: text, page: 1 }, titleQuery: text }
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
            height: 40,
            backgroundColor: darkMode?'#44444466':'#88888822',
            marginTop: 8,
            marginBottom: 8,
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
        onSuggestionPressed={onSuggestionPressedHandler}
        onGetAutocompletions = {async (text) => {
          
          if (text) {
            const response = await fetch('https://api.themoviedb.org/3/search/multi?api_key=c781a3dabef946805a961db3b7b916eb&query=' + text, {
              method: 'GET'
            });
            const data = await response.json();
            
            return data.results.map(({ name, title, media_type, id, release_date, first_air_date }) => {
              switch (media_type) {
                case "tv": return { name: name + " (" + first_air_date.substring(0,4) + ")", media_type, id }
                case "person": return { name, media_type, id }
                case "movie": return { name: title + " (" + release_date.substring(0,4) + ")", media_type, id }
              }
            });
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
