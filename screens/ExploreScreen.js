import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// app components
import { MonoText } from '../components/StyledText';

// constants
import Style from '../constants/Style'

export default function ExploreScreen() {

  return (
    <View style={{flex:1}}>
      <ScrollView style={Style.lightContainer}>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
