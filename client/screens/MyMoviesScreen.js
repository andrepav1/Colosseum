import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// app components
import { MonoText } from '../components/StyledText';

// constants
import Style from '../constants/Style'
import Color from '../constants/Colors'

import {connect} from 'react-redux';

function MyMoviesScreen({ navigation, route, setDarkMode, darkMode }) {

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

export default connect(mapStateToProps, mapDispatchToProps)(MyMoviesScreen)


const styles = StyleSheet.create({
  
});
