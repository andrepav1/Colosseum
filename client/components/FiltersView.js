import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Picker, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid-random';

// app components
import FilterCardMain from './movieCards/FilterCardMain';
import { MonoText, MonoTextBold } from './StyledText';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;
import { countriesObjectArray, languagesObjectArray, genreObjectsArray, years } from '../constants/MovieData';

export default function FiltersView({darkMode, nav}) {

  const [selectedValue, setSelectedValue] = React.useState();
  const [filterValues, setFilterValues] = React.useState();
  const [selectedFilter, setSelectedFilter] = React.useState();

  const getFilterStyle = (filter) => filter === selectedFilter?{ backgroundColor: "#BBBBBBBB"}:{};

  const onSearchHandler = (query) => {
    
    switch (selectedFilter) {
      case "language": 
        return nav.navigate('Explore', { screen: 'MultipleMoviesScreen', params: { query, variables: { with_original_language: selectedValue, page: 1 }, titleQuery: "Language" }});
      // case "region": 
      //   return nav.navigate('Explore', { screen: 'MultipleMoviesScreen', params: { query, variables: { region: selectedValue, page: 1 }, titleQuery: "Region" }});
      case "genre": 
        let genreObj = JSON.parse(selectedValue);
        let genreId = query === "DISCOVER_MOVIE"?genreObj.id:genreObj.tv_id;
        return nav.navigate('Explore', { screen: 'MultipleMoviesScreen', params: { query, variables: { with_genres: genreId.toString(), page: 1 }, titleQuery: "Genre" }});
      case "year": 
        return nav.navigate('Explore', { screen: 'MultipleMoviesScreen', params: { query, variables: { year: parseInt(selectedValue), page: 1 }, titleQuery: "Year" }});
    }

  }

  React.useEffect(() => {
    switch (selectedFilter) {
      case "language":  return setFilterValues(languagesObjectArray.map(item => { return { name: item.english_name, value: item.iso_639_1 }}));
      // case "region":    return setFilterValues(countriesObjectArray.map(item => { return { name: item.english_name, value: item.iso_3166_1 }}));
      case "genre":     return setFilterValues(genreObjectsArray.map(item => { return { name: item.name, value: JSON.stringify(item) }}));
      case "year":      return setFilterValues(years.map(item => { return { name: item.toString(), value: item.toString()}}));
      default: setFilterValues(null); 
    }
  },[selectedFilter])

  React.useEffect(() => {
    if(filterValues) setSelectedValue(filterValues[0].value);
  },[filterValues])

  const isValidJSON = (str) => {
    try { JSON.parse(str); } 
    catch (e) { return false; }
    return true;
  }

  const getTVButton = () => {

    if(!selectedValue) return null;
    
    if(selectedFilter === "year") return null;
    
    if(selectedFilter === "genre" && !isValidJSON(selectedValue)) return null;
    if(selectedFilter === "genre" && !JSON.parse(selectedValue).tv_id) return null;

    return (
      <TouchableOpacity onPress={() => onSearchHandler('DISCOVER_TV')}>
        <View style={[darkMode?styles.darkCardContainer:Style.lightCardContainer,{ flex: 1, flexDirection: "column", justifyContent: "center", alignSelf: "center", paddingVertical: 8 ,paddingHorizontal: 16, marginBottom: 12 }]}>
          <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ }]}>Search TV Shows</MonoTextBold>
        </View>
      </TouchableOpacity>
    );
  }

  const getMovieButton = () => {

    if(!selectedValue) return null;

    if(selectedFilter === "genre" && !isValidJSON(selectedValue)) return null;
    if(selectedFilter === "genre" && !JSON.parse(selectedValue).id) return null;

    return (
      <TouchableOpacity onPress={() => onSearchHandler('DISCOVER_MOVIE')}>
        <View style={[darkMode?styles.darkCardContainer:Style.lightCardContainer,{ flex: 1, flexDirection: "column", justifyContent: "center", alignSelf: "center", paddingVertical: 8 ,paddingHorizontal: 16, marginBottom: 12 }]}>
          <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ }]}>Search Movies</MonoTextBold>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.filtersContainer}>

      <View style={{ flexDirection: "row" }}>

        <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText, { marginLeft: 16, width: "20%", paddingTop: 14 }]}>Filter by:</MonoTextBold>

        <ScrollView horizontal={true} contentContainerStyle={{ flexDirection: "row", width: "80%" }}>
          {/* <TouchableOpacity onPress={() => setSelectedFilter(selectedFilter==="region"?null:"region")}>
            <View style={[darkMode?styles.darkCardContainer:Style.lightCardContainer,styles.filterLabel,getFilterStyle("region")]}>
              <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText]}>Region</MonoTextBold>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => setSelectedFilter(selectedFilter==="language"?null:"language")}>
            <View style={[darkMode?styles.darkCardContainer:Style.lightCardContainer,styles.filterLabel,getFilterStyle("language")]}>
              <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText]}>Language</MonoTextBold>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedFilter(selectedFilter==="genre"?null:"genre")}>
            <View style={[darkMode?styles.darkCardContainer:Style.lightCardContainer,styles.filterLabel,getFilterStyle("genre")]}>
              <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText]}>Genre</MonoTextBold>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedFilter(selectedFilter==="year"?null:"year")}>
            <View style={[darkMode?styles.darkCardContainer:Style.lightCardContainer,styles.filterLabel,getFilterStyle("year")]}>
              <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText]}>Year</MonoTextBold>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      
      {
        filterValues &&
        <View style={{ width: width }}>
          <Picker
            selectedValue={selectedValue}
            style={{ width: "80%", alignSelf: "center" }}
            itemStyle={darkMode?Style.mediumLightText:Style.mediumDarkText}
            onValueChange={value => setSelectedValue(value)}
          >
            { filterValues.sort((a,b) => a.name > b.name).map(item => (<Picker.Item key={uuid()} label={item.name} value={item.value} />)) }
          </Picker>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginBottom: 8 }}>
            { getTVButton() }
            { getMovieButton() }
          </View>
        </View>
      }
    </View>
  );
}


const styles = StyleSheet.create({
  filtersContainer: {
    flex: 1, 
    flexDirection: "column", 
  },
  filterLabel: {
    alignSelf: "center", 
    padding: 8, 
    marginHorizontal: 4, 
    marginVertical: 10
  },
  darkCardContainer: {
    backgroundColor: "#66666644", 
    borderRadius: 8, 
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
});