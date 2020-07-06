import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DeckSwiper from 'react-native-deck-swiper'

// app components
import { MonoText, MonoTextBold } from '../components/StyledText';
import MovieDeckCard from '../components/movieCards/MovieDeckCard';
import DataLoadingComponent from '../components/DataLoadingComponent';
import DataErrorComponent from '../components/DataErrorComponent';

// constants
import Style from '../constants/Style'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout';

import {connect} from 'react-redux';

import { useQuery } from '@apollo/react-hooks';

// GraphQL Queries
import { 
  MOVIE_POPULAR,
} from '../gqlQueries'

function DiscoverScreen({ navigation, darkMode }) {
  
  // =================================================================
  // useState Hooks 

  const [deckEmpty,setDeckEmpty] = React.useState(false);
  const [swiper,setSwiper] = React.useState();

  // =================================================================
  // DeckSwiper functions 

  const onSwipeLeftHandler = (index,movie) => {
    // console.log("swipe left:", movie.title);
    
  }
  
  const onSwipeRightHandler = (index,movie) => {
    // console.log("swipe right:", movie.title);
    
  }

  const onSwipeBottomHandler = (index,movie) => {
    // console.log("swipe bottom:", movie.title);
    
  }
  
  const onRefreshDeckHandler = () => {
    // console.log("refresh deck");
    setDeckEmpty(false);
    swiper.jumpToCardIndex(0);
  }

  // =================================================================
  // useQuery Hooks
  const popularMoviesResponse = useQuery(MOVIE_POPULAR);


  // =================================================================
  // Rendering loading component when data is loading 
  if (popularMoviesResponse.loading) return <DataLoadingComponent />;

  
  // =================================================================
  // Rendering loading component when data is refetching 
  if (popularMoviesResponse.networkStatus == 4) return <DataLoadingComponent />;

  
  // =================================================================
  // Rendering error component if at least one error occurs 
  if (popularMoviesResponse.error) return <DataErrorComponent />;

  // =================================================================
  // DESTRUCTURING RESPONSE OBJECTS
  const { data: { moviePopular }} = popularMoviesResponse;

  // =================================================================
  // SCREEN RENDERING

  return (
    <View style={darkMode?Style.softDarkContainer:Style.lightContainer}>
      <View>
        <DeckSwiper
          ref={swiper => setSwiper(swiper)}
          overlayLabels={{
            left: { element: label('NOPE', 'red', '20deg', { top: 40, right: 30 }) },
            right: { element: label('LIKE', 'green', '-20deg', { top: 40, left: 30 }) },
            bottom: { element: label('IGNORE', '#CCC', '-20deg', { top: 60, left: 30 }) },
            top: { element: label('LOVE', 'blue', '-20deg', { bottom: 120, left: 40 }) }
          }}
          disableTopSwipe={true}
          cards={moviePopular}
          renderCard={card => <MovieDeckCard props={card} darkMode={darkMode} nav={navigation} />}
          onSwipedAll={() => {setDeckEmpty(true)}}
          onSwipedLeft={onSwipeLeftHandler}
          onSwipedRight={onSwipeRightHandler}
          onSwipedBottom={onSwipeBottomHandler}
          stackSize={5}
        />
        {
          deckEmpty &&
          <View style={{ position: "absolute", alignSelf: "center", top: 280, alignItems: "center" }}>
            <MonoText style={darkMode?Style.mediumLightText:Style.mediumDarkText}>You finished the movie deck.</MonoText>
            <TouchableOpacity style={{ padding: 8 }} onPress={onRefreshDeckHandler}>
              <MonoText style={{ fontSize: 14, color: Colors.linkText, }}>Refresh</MonoText>
            </TouchableOpacity>  
          </View>
        }
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.GlobalSettings.darkMode
  }
}

export default connect(mapStateToProps)(DiscoverScreen);


const label = (title, color, rotation, extraStyle) => {
  return (
    <View style={{ backgroundColor: "#00000088", width: "100%", height: 540, borderRadius: 8 }}>
      <MonoTextBold 
      style={{
        ...extraStyle, 
        position: "absolute",
        color: color, 
        borderColor: color, 
        fontSize: 40, 
        transform: [{ rotate: rotation }],
        borderWidth: 2, 
        paddingHorizontal: 4
        }}>{title}</MonoTextBold>
    </View>
  );
}
