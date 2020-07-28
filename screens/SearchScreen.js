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

import { useLazyQuery } from '@apollo/react-hooks';
import { AUTOCOMPLETE_MULTI_SEARCH } from '../gqlQueries';

import {connect} from 'react-redux';

function SearchScreen({ navigation, darkMode }) {

  const [getAutocompletions, { loading, data }] = useLazyQuery(AUTOCOMPLETE_MULTI_SEARCH);

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
      params: { query: "SEARCH_MULTI", variables: { query: text, page: 1 }, titleQuery: text }
    });
  }

  const onGetAutocompletionsHandler = async (text) => {
    if (!text) return [];

    getAutocompletions({ variables: { query: text }})

    if(data)
      return data.autocompleteMultiSearch.map(({name}) => name);
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
        FilterView={() => <FiltersView nav={navigation} darkMode={darkMode} />}
        suggestionHistoryEntryRollOverCount={3}
        persistent={true}
        autoFocus={true}
        visibleInitially={true}
        placeholder = 'Search...'
        placeholderColor={"grey"}
        darkMode={darkMode}
        onSearch={onSearchHandler}
        onSuggestionPressed={onSuggestionPressedHandler}
        onGetAutocompletions={onGetAutocompletionsHandler}
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
