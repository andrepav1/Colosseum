import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DeckSwiper } from 'native-base';

// app components
import { MonoText } from '../components/StyledText';
import MovieDeckCard from '../components/MovieDeckCard';

// constants
import Style from '../constants/Style'
import Colors from '../constants/Colors'

export default function DiscoverScreen() {

  const [cards,setCards] = React.useState(getCards());
  const [deckEmpty,setDeckEmpty] = React.useState(false);

  const onSwipeLeftHandler = (movie) => {
    console.log("swipe left:", movie);
    
  }
  
  const onSwipeRightHandler = (movie) => {
    console.log("swipe right:", movie);
    
  }
  
  const onRefreshDeckHandler = () => {
    console.log("refresh deck");
    
  }

  return (
    <View style={Style.lightContainer}>
      <View style={{ flex: 1, marginTop: 80, zIndex: 1 }}>
        <DeckSwiper
          renderEmpty={() => setDeckEmpty(true)}
          looping={false} 
          onSwipeLeft={onSwipeLeftHandler}
          onSwipeRight={onSwipeRightHandler}
          dataSource={cards}
          renderItem={item => <MovieDeckCard props={item} deckSwiper={this} /> }
        />
      </View>
      
      {
        deckEmpty && 
        <View style={{ position: "absolute", alignSelf: "center", top: 300, alignItems: "center" }}>
          <MonoText style={{ fontSize: 14 }}>You finished the movie deck.</MonoText>
          <TouchableOpacity style={{ padding: 8 }} onPress={onRefreshDeckHandler}>
            <MonoText style={{ fontSize: 14, color: Colors.linkText, }}>Refresh.</MonoText>
          </TouchableOpacity>  
        </View>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  
});

const getCards = () => [
  {
    text: 'Card One',
    name: 'One',
    title: 'One',
    description: 'Magical Mistery Mooooo, Mattress Max Mad Man, Mortar Mel Gibson Milwakee; Milk Shake Shake Shake Booty Boooooo Nguiyen NAAAAASCAR Love Lukas Moura',
    image: require('../assets/images/robot-dev.png'),
  },
  {
    text: 'Card Two',
    name: 'Two',
    title: 'Two',
    description: 'Magical Mistery Mooooo, Booty Boooooo Nguiyen NAAAAASCAR Love Lukas Moura',
    image: require('../assets/images/robot-dev.png'),
  },
  {
    text: 'Card Three',
    name: 'Three',
    title: 'Three',
    description: 'Magical Mistery Mooooo, Mattress Max Mad Man, Mortar Mel Gibson Milwakee; Milk Shake Shake Shake Booty Boooooo Nguiyen NAAAAASCAR Love Lukas Moura',
    image: require('../assets/images/robot-dev.png'),
  },
  {
    text: 'Card Four',
    name: 'Four',
    title: 'Four',
    description: 'Magical Mistery Mooooo, Mattress Max Mad Man, Mortar Mel Gibson Milwakee; Milk Shake Shake Shake Booty Boooooo Nguiyen NAAAAASCAR Love Lukas Moura',
    image: require('../assets/images/robot-dev.png'),
  },
  {
    text: 'Card Five',
    name: 'Five',
    title: 'Five',
    description: 'Magical Mistery Mooooo, Mattress Max Mad Man, Mortar Mel Gibson Milwakee; Milk Shake Shake Shake Booty Boooooo Nguiyen NAAAAASCAR Love Lukas Moura',
    image: require('../assets/images/robot-dev.png'),
  }
];