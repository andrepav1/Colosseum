import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import uuid from 'uuid-random';

// app components
import ContentBackdropCard from './movieCards/ContentBackdropCard';
import { MonoText, MonoTextBold } from './StyledText';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';

export default function ContentBackdropFlatList({content, nav, darkMode}) {

  if(content.length == 0) return null;

  const renderItem = ({item}) => {
    return (
      <View key={uuid()} style={{ paddingHorizontal: 4, paddingVertical: 8 }}>
        <ContentBackdropCard props={item} nav={nav} darkMode={darkMode} />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={content}
        renderItem={renderItem}

        keyExtractor={uuid}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
}
