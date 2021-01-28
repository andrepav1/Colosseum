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

function MoreScreen({ navigation, route, setDarkMode, darkMode }) {

  return (
    <View style={{flex:1}}>
      <ScrollView style={darkMode?Style.darkContainer:Style.lightContainer}>
        <MonoText style={[darkMode?Style.largeLightText:Style.largeDarkText,{ alignSelf: "center", marginTop: 80 }]}>darkMode {darkMode?"active":"not active"}</MonoText>
        <TouchableOpacity onPress={() => setDarkMode(!darkMode) }>
          <MonoText style={[darkMode?Style.largeLightText:Style.largeDarkText,{ alignSelf: "center", marginTop: 10 }]}>toggle darkMode</MonoText>
        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(MoreScreen)


const styles = StyleSheet.create({
  
});
