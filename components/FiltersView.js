import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Picker, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid-random';

// app components
import FilterCardMain from './movieCards/FilterCardMain';
import FilterCardSmall from './movieCards/FilterCardSmall';
import { MonoText, MonoTextBold } from './StyledText';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';

export default function FiltersView({filters, darkMode, nav}) {

  const [selectedFilter, setSelectedFilter] = React.useState();

  // console.log(selectedFilter);
  const [selectedValue, setSelectedValue] = React.useState();
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={[styles.filtersContainer]}>
    <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ marginLeft: 16, marginTop: 4 }]}>Filters:</MonoTextBold>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={ { paddingHorizontal: 12, marginVertical: 12,  }}>
      {
        filters.map(filter => (
          <View key={uuid()} style={{ marginHorizontal: 4 }}>
            <FilterCardMain props={filter} nav={nav} darkMode={darkMode} selected={(filter.name === selectedFilter)} selectFilter={setSelectedFilter} />
          </View>
        ))
      }
      </ScrollView>

        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
          style={{ backgroundColor: "green", paddingTop: 200 }}
        >
          <View style={{ backgroundColor: "red", height: 400, width: 200, alignSelf: "center" }}>
            <Picker
              selectedValue={selectedValue}
              style={{ width: "50%" }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
        </Modal>
      
      {/* { 
        selectedFilter &&
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={ { paddingHorizontal: 16, marginBottom: 12, paddingTop: 8 }}>
        {
          filters.find(filter => filter.name === selectedFilter).options.map(option => (
            <View key={uuid()} style={{ marginHorizontal: 2 }}>
              <FilterCardSmall props={option} nav={nav} darkMode={darkMode} />
            </View>
          ))
        }
        </ScrollView>
      } */}

    </View>
  );
}


const styles = StyleSheet.create({
  filtersContainer: {
    flex: 1, 
    flexDirection: "column", 
  }
});