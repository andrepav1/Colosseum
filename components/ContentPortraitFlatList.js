import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import uuid from 'uuid-random';

// app components
import ContentPortraitCard from './movieCards/ContentPortraitCard';
import { MonoText, MonoTextBold } from './StyledText';

import DataErrorComponent from './DataErrorComponent'

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';

import { useQuery } from '@apollo/react-hooks';

export default function ContentPortraitFlatList({query, params, label, darkMode, seeMoreData, nav}) {
  
  // =================================================================
  // useQuery hook 
  const { data, loading, error, refetch } = useQuery(query, { variables: { params }});
  
  if (loading) return null
  if (error) return null

  const content = data[Object.keys(data)[0]].results
  
  let isMovie = content[0]["__typename"] === "MovieBasic"
  
  const renderItem = ({item}) => {
    return (
      <View style={{ paddingHorizontal: 4 }}>
        <ContentPortraitCard props={item} nav={nav} darkMode={darkMode} />
      </View>
    );
  }
    
  const seeMoreHandler = (genre) => {
    nav.navigate("MultipleMoviesScreen", { query, variables: { ...params, page: 1 }, titleQuery: label });
  }

  return (
    <View style={styles.contentContainer}>
      <View style={{ flexDirection: "row", }}>
        <View style={{ width: "75%" }}>
          <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ textAlign: "left", paddingLeft: 16 }]}>{label}</MonoTextBold>
        </View>
        <View style={{ width: "25%" }}>
          <TouchableOpacity onPress={() => { seeMoreHandler() }}>
            <MonoText style={{ textAlign: "right", marginRight: 16, color: Colors.tintColor, fontSize: 14, top: 2 }}>See More</MonoText>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={content}
        renderItem={renderItem}

        keyExtractor={uuid}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10, marginTop: 6 }}
      />

    </View>
  );
}


const styles = StyleSheet.create({
  contentContainer: {
    flex: 1, 
    flexDirection: "column", 
    height: 200, 
    marginVertical: 4,
  }
});