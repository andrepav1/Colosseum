import * as React from 'react';
import { StyleSheet, TouchableOpacity, RefreshControl, FlatList, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';
import uuid from 'uuid-random';

// app components
import { MonoText } from '../components/StyledText';
import ContentPortraitFlatList from '../components/ContentPortraitFlatList';
import ContentBackdropFlatList from '../components/ContentBackdropFlatList';
import MoviesCarousel from '../components/MoviesCarousel';
import DataLoadingComponent from '../components/DataLoadingComponent';
import DataErrorComponent from '../components/DataErrorComponent';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import { genres, genreObjectsArray } from '../constants/MovieData';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

import { useQuery } from '@apollo/react-hooks';

// GraphQL Queries
import { 
  MOVIE_POPULAR,
  MOVIE_TOP_RATED,
  MOVIE_NOW_PLAYING,
  DISCOVER_MOVIE,
  DISCOVER_TV
} from '../gqlQueries'

import {connect} from 'react-redux';

function ExploreScreen({ navigation, route, darkMode }) {
  
  const refreshCount = React.useRef(0);

  React.useEffect(() => {
    refreshCount.current++;
  })
  
  console.log("refreshed " + refreshCount.current + " times");

  // =================================================================
  // React Hooks 
  const [carouselLoaded, setCarouselLoaded] = React.useState(false);

  const [refreshing, setRefreshing] = React.useState(false);
    
  const onRefresh = () => {
    setRefreshing(true);

    for(const response of movieResponses) { 

      let { total_pages } = response.data.discoverMovie;

      // Only show first ten pages 
      total_pages = total_pages>10?10:total_pages; 

      const page = Math.floor(Math.random() * total_pages + 1); 

      const { with_genres: genreId } = response.variables.params;

      response.refetch({ params: { with_genres: genreId, page: page }}).catch((e) => console.log("promise rejected:", e));

    };
    
    setRefreshing(false);
    
  };

  // =================================================================
  // useQuery hooks
  
  const popularMoviesResponse = useQuery(MOVIE_POPULAR, { variables: { params: { page: 1 }}});
  const topRatedMoviesResponse = useQuery(MOVIE_TOP_RATED, { variables: { params: { page: 1 }}});
  const movieNowPlayingResponse= useQuery(MOVIE_NOW_PLAYING, { variables: { params: { page: 1 }}});

  const movieGenres = genreObjectsArray.filter((item) => item.id);
  const movieResponses = movieGenres.map((genre) => {
    return useQuery(DISCOVER_MOVIE, { variables: { params: { with_genres: genre.id.toString(), page: 1 }}})
  });

  const tvShowGenres = genreObjectsArray.filter((item) => item.tv_id);
  const tvShowResponses = tvShowGenres.map((genre) => {
    return useQuery(DISCOVER_TV, { variables: { params: { with_genres: genre.tv_id.toString(), page: 1 }}})
  });
  

  // =================================================================
  // Rendering loading component when data is loading 
  for(const response of movieResponses) { if (response.loading) return <DataLoadingComponent darkMode={darkMode} /> };
  for(const response of tvShowResponses) { if (response.loading) return <DataLoadingComponent darkMode={darkMode} /> };

  // =================================================================
  // Rendering loading component when data is refetching 
  for(const response of movieResponses) { if (response.networkStatus == 4) return <DataLoadingComponent darkMode={darkMode} /> };
  for(const response of tvShowResponses) { if (response.networkStatus == 4) return <DataLoadingComponent darkMode={darkMode} /> };

  // =================================================================
  // Rendering error component if at least one error occurs 
  for(const response of movieResponses) { if (response.error) return <DataErrorComponent props={response} darkMode={darkMode} /> };
  for(const response of tvShowResponses) { if (response.error) return <DataErrorComponent props={response} darkMode={darkMode} /> };

  // =================================================================
  // DESTRUCTURING RESPONSE OBJECTS
  const {moviePopular} = popularMoviesResponse.data;
  const {movieTopRated} = topRatedMoviesResponse.data;
  const {movieNowPlaying} = movieNowPlayingResponse.data;

  const renderItem = ({item,index}) => {
    if(index == 0) {
      return (<MoviesCarousel movies={item} nav={navigation} setLoaded={setCarouselLoaded}/>)
    }
    else if((index%4) == 0) {
      let isMovie = item.data.hasOwnProperty("discoverMovie");
      let content = isMovie?item.data.discoverMovie.results:item.data.discoverTv.results;
      
      return (<ContentBackdropFlatList content={content} nav={navigation} darkMode={darkMode}/>)
    }
    else {

      return null;

      let isMovie = item.data.hasOwnProperty("discoverMovie");
      let content = isMovie?item.data.discoverMovie.results:item.data.discoverTv.results;
      let genreId = parseInt(item.variables.params.with_genres);

      let seeMoreQuery = isMovie?'DISCOVER_MOVIE':'DISCOVER_TV';

      return (
        <ContentPortraitFlatList 
          sectionName={isMovie? genres.get(genreId) + " Movies": genres.get(genreId) + " TV Shows"} 
          content={content} 
          darkMode={darkMode} 
          nav={navigation} 
          seeMoreData={{ query: seeMoreQuery, variables: { with_genres: genreId }, titleQuery: isMovie?genres.get(genreId):genres.get(genreId) }}
        />)
    }
  }

  const shuffle = (array) => {
    
    for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  // =================================================================
  // SCREEN RENDERING

  const carouselMovies = [movieNowPlaying, moviePopular][Math.floor(Math.random()*2)];
  const contentArray = shuffle(movieResponses.concat(tvShowResponses));
  
  return (
    <View style={[darkMode?Style.darkContainer:Style.lightContainer,{ }]}>

      <FlatList
        data={[carouselMovies].concat(contentArray)}
        initialNumToRender={5}
        renderItem={renderItem}
        keyExtractor={uuid}
        refreshing={refreshing} 
        onRefresh={onRefresh}
      />

    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.GlobalSettings.darkMode
  }
}

export default connect(mapStateToProps)(ExploreScreen);

