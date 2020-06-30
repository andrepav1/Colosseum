import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// app components
import { MonoText, MonoTextBold } from '../components/StyledText';

// constants
import Style from '../constants/Style'
import Color from '../constants/Colors'
import Layout from '../constants/Layout'

import {connect} from 'react-redux';

function SearchScreen({ navigation, route, setDarkMode, darkMode }) {

  return (
    <View style={{flex:1}}>
      <ScrollView style={darkMode?Style.darkContainer:Style.lightContainer}>

      </ScrollView>
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
  
});
