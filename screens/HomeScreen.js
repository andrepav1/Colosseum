import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// app components
import { MonoText } from '../components/StyledText';

// constants
import Style from '../constants/Style'


export default function HomeScreen() {


  const pressHandling = () => {

  }

  return (
    <View style={{flex:1}}>
      <ScrollView style={Style.lightContainer} contentContainerStyle={{paddingTop: 30 }}>
        
        <TouchableOpacity onPress={() => pressHandling()}>
          <MonoText style={{ color: "white", fontSize: 20, alignSelf: "center", marginTop: 200 }}>Press</MonoText>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

});
