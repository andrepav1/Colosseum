import * as React from 'react';
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import YoutubePlayer from 'react-native-youtube-iframe';
import uuid from 'uuid-random';

// app components
import { MonoText, MonoTextBold } from '../components/StyledText';
import DataLoadingComponent from '../components/DataLoadingComponent';
import DataErrorComponent from '../components/DataErrorComponent';
import ContentPortraitFlatList from '../components/ContentPortraitFlatList';
import MoviesCastScrollView from '../components/MoviesCastScrollView';
import MoviesBackdropImagesCarousel from '../components/MoviesBackdropImagesCarousel';
import MovieVideosCarousel from '../components/MovieVideosCarousel';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

import { useQuery } from '@apollo/react-hooks';

// GraphQL Queries
import { 
  MOVIE_INFO,
  MOVIE_VIDEOS,
  MOVIE_SIMILAR,
  MOVIE_BACKDROP_IMAGES,
  MOVIE_KEYWORDS,
  MOVIE_CAST
} from '../gqlQueries'

const IMAGE_PATH = 'http://image.tmdb.org/t/p/w780/';

import {connect} from 'react-redux';

function MovieScreen({ navigation, route, darkMode }) {
  
  // =================================================================
  // React Hooks

  const playerRef = React.useRef();

  const [playing, setPlaying] = React.useState(true);

  React.useEffect(() => {
    return navigation.addListener('blur', () => setPlaying(false));
  }, [navigation]);

  React.useEffect(() => {
    return navigation.addListener('focus', () => setPlaying(true));
  }, [navigation]);

  // =================================================================
  // useQuery Hooks
  const movieInfoResponse = useQuery(MOVIE_INFO, { variables: { id: route.params.id }});
  const movieSimilarResponse = useQuery(MOVIE_SIMILAR, { variables: { params: { id: route.params.id }}});
  const movieVideosResponse = useQuery(MOVIE_VIDEOS, { variables: { id: route.params.id }});
  const movieBackdropImagesResponse = useQuery(MOVIE_BACKDROP_IMAGES, { variables: { id: route.params.id }});
  const movieKeywordsResponse = useQuery(MOVIE_KEYWORDS, { variables: { id: route.params.id }});
  const movieCastResponse = useQuery(MOVIE_CAST, { variables: { id: route.params.id }});

  // =================================================================
  // Rendering loading component when data is loading 
  if (movieInfoResponse.loading) return <DataLoadingComponent darkMode={darkMode} />;
  if (movieSimilarResponse.loading) return <DataLoadingComponent darkMode={darkMode} />;
  if (movieVideosResponse.loading) return <DataLoadingComponent darkMode={darkMode} />;
  if (movieBackdropImagesResponse.loading) return <DataLoadingComponent darkMode={darkMode} />;
  if (movieKeywordsResponse.loading) return <DataLoadingComponent darkMode={darkMode} />;
  if (movieCastResponse.loading) return <DataLoadingComponent darkMode={darkMode} />;
  
  // =================================================================
  // Rendering loading component when data is refetching 
  if (movieInfoResponse.networkStatus == 4) return <DataLoadingComponent />;
  if (movieSimilarResponse.networkStatus == 4) return <DataLoadingComponent />;
  if (movieVideosResponse.networkStatus == 4) return <DataLoadingComponent />;
  if (movieBackdropImagesResponse.networkStatus == 4) return <DataLoadingComponent />;
  if (movieKeywordsResponse.networkStatus == 4) return <DataLoadingComponent />;
  if (movieCastResponse.networkStatus == 4) return <DataLoadingComponent />;
  
  // =================================================================
  // Rendering error component if at least one error occurs 
  if (movieInfoResponse.error) return <DataErrorComponent props={movieInfoResponse}/>;
  if (movieSimilarResponse.error) return <DataErrorComponent props={movieSimilarResponse} />;
  if (movieVideosResponse.error) return <DataErrorComponent props={movieVideosResponse} />;
  if (movieBackdropImagesResponse.error) return <DataErrorComponent props={movieBackdropImagesResponse} />;
  if (movieKeywordsResponse.error) return <DataErrorComponent props={movieKeywordsResponse} />;
  if (movieCastResponse.error) return <DataErrorComponent props={movieCastResponse} />;

  // =================================================================
  // DESTRUCTURING RESPONSE OBJECTS
  const { data: { movieInfo }} = movieInfoResponse;
  const { data: { movieSimilar: { results: similarMovies } }} = movieSimilarResponse;
  const { data: { movieVideos }} = movieVideosResponse;
  const { data: { movieImages: { backdrops } }} = movieBackdropImagesResponse;
  const { data: { movieKeywords } } = movieKeywordsResponse;
  const { data: { movieCredits: { cast } } } = movieCastResponse;
  
  // console.log(movieInfo);
  // console.log(movieSimilar);
  // console.log(movieVideos);
  // console.log(movieImages);
  // console.log(movieKeywords);
  // console.log(cast);

  // =================================================================
  // Other functions
  
  const getReleaseDate = () => movieInfo.release_date?" (" + movieInfo.release_date.substring(0,4) + ")":"";
  const getTagline = () => movieInfo.tagline?(<MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText,{ marginBottom: 8 }]}>{movieInfo.tagline}</MonoTextBold>):null;
  const getOverview = () => movieInfo.overview?(<MonoText style={darkMode?Style.smallLightText:Style.smallDarkText}>{movieInfo.overview}</MonoText>):null;
  
  const genrePressedHandler = (genre) => {
    navigation.navigate("MultipleMoviesScreen", { query: "DISCOVER_MOVIE", variables: { with_genres: genre.id, page: 1 }, titleQuery: genre.name });
  }
  
  const keywordPressedHandler = (keyword) => {
    navigation.navigate("MultipleMoviesScreen", { query: "DISCOVER_MOVIE", variables: { with_keywords: keyword.id, page: 1 }, titleQuery: keyword.name });
  }

  const getYoutubePlayer = () => {
    const { key } = getYoutubeMovieTrailer();
    
    if(key) {
      return (
        <View style={{ height: width*0.58, }}>
          <YoutubePlayer
            ref={playerRef}
            height={"100%"}
            width={width}
            videoId={key}
            play={false}
            volume={0}
            onChangeState={console.log}
          />
        </View>
      );
    }

    if(backdrops.length > 0) {
      return (
        <Image source={{uri: IMAGE_PATH + backdrops[0].file_path}} style={{ width: width, height: width*0.56, resizeMode: "cover" }} />
      );
    }

    return null;

  }
  
  const getYoutubeMovieTrailer = () => {

    const ytVideos = movieVideos.filter(movie => movie.site !== "youtube");
    for (const ytVideo of ytVideos) {
      if(ytVideo.type === "Trailer") {
        return ytVideo;
      }
    }

    return ytVideos.length == 0?{key: null}:ytVideos[0];
  }
  
  // =================================================================
  // SCREEN RENDERING
  
  return (
    <View style={{ flex:1 }}>
      <ScrollView style={darkMode?Style.darkContainer:Style.lightContainer} contentContainerStyle={{ }}>

        { getYoutubePlayer() }
        
        <View style={{ width: width-20, marginLeft: 10, flexDirection: "column", marginBottom: 12 }}>
          <MonoTextBold style={[darkMode?Style.largeLightText:Style.largeDarkText,{ marginBottom: 2, marginTop: 8 }]}>{movieInfo.title + getReleaseDate()}</MonoTextBold>
          { getTagline() }
          { getOverview() }
        </View>

        <View style={{ width: width-20, marginLeft: 2, flexDirection: "row", flexWrap: 'wrap', marginBottom: 8 }}>
          {
            movieInfo.genres.map(item => (
              <TouchableWithoutFeedback key={uuid()} onPress={() => genrePressedHandler(item)}>
                <View style={{ backgroundColor: "#88888822", borderRadius: 16, marginBottom: 6, marginHorizontal: 6, paddingVertical: 6, paddingHorizontal: 8, }}>
                  <MonoTextBold style={darkMode?Style.mediumLightText:Style.mediumDarkText}>{item.name}</MonoTextBold>
                </View>
              </TouchableWithoutFeedback>
            ))
          }
        </View>

        { cast.length > 0 && <Divider style={[darkMode?Style.lightDividerStyle:Style.darkDividerStyle,{ marginBottom: 12 }]} />}
        <MoviesCastScrollView cast={cast} darkMode={darkMode} nav={navigation} />
        { cast.length > 0 && <Divider style={[darkMode?Style.lightDividerStyle:Style.darkDividerStyle,{ marginBottom: 12, marginTop: 8 }]} />}

        <MoviesBackdropImagesCarousel images={backdrops} nav={navigation} darkMode={darkMode} />

        <MovieVideosCarousel videos={movieVideos} nav={navigation} darkMode={darkMode} />

        <View style={{ width: width-20, marginLeft: 10, flexDirection: "column", marginBottom: 8 }}>
          <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ marginBottom: 8 }]}>Details</MonoTextBold>
          {
            movieInfo.original_title &&
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "45%" }]}>Original Title:</MonoTextBold>
              <MonoText style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "55%" }]}>{movieInfo.original_title}</MonoText>
            </View>
          }
          {
            movieInfo.original_language &&
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "45%" }]}>Original Language:</MonoTextBold>
              <MonoText style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "55%" }]}>{movieInfo.original_language}</MonoText>
            </View>
          }
          {
            movieInfo.spoken_languages.length > 0 &&
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "45%" }]}>Spoken Languages:</MonoTextBold>
              <MonoText style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "55%" }]}>{movieInfo.spoken_languages.map(lang => lang.name + ", ")}</MonoText>
            </View>
          }
          {
            movieInfo.production_companies.length > 0 &&
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "45%" }]}>Production Companies:</MonoTextBold>
              <MonoText style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "55%" }]}>{movieInfo.production_companies.map(company => company.name + ", ")}</MonoText>
            </View>
          }
          {
            movieInfo.production_countries.length > 0 &&
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "45%" }]}>Production Countries:</MonoTextBold>
              <MonoText style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "55%" }]}>{movieInfo.production_countries.map(country => country.name + ", ")}</MonoText>
            </View>
          }
          {
            movieInfo.runtime !== null &&
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "45%" }]}>Runtime:</MonoTextBold>
              <MonoText style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "55%" }]}>±{movieInfo.runtime} minutes</MonoText>
            </View>
          }
        </View>
        
        <View style={{ width: width-20, marginLeft: 8, flexDirection: "row", flexWrap:'wrap', marginBottom: 8 }}>
          {
            movieKeywords.map(item => (
              <TouchableWithoutFeedback key={uuid()} onPress={() => keywordPressedHandler(item)}>
                <View key={uuid()} style={{ backgroundColor: "#88888822", borderRadius: 16, margin: 2, paddingVertical: 2, paddingHorizontal: 4, }}>
                  <MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>{ "#" + item.name.replace(/ /g,"-" )}</MonoTextBold>
                </View>
              </TouchableWithoutFeedback>
            ))
          }
        </View>

        { similarMovies.length > 0 && <Divider style={[darkMode?Style.lightDividerStyle:Style.darkDividerStyle,{ marginVertical: 8 }]} /> }

        <ContentPortraitFlatList 
          sectionName={"Similar Movies"} 
          content={similarMovies} 
          darkMode={darkMode} 
          nav={navigation} 
          seeMoreData={{ query: 'MOVIE_SIMILAR', variables: { id: route.params.id }, titleQuery: "Similar Movies" }}
        />

      </ScrollView>
    </View>
  );
}

// budget : Float
// imdb_id : String
// popularity : Float
// vote_average : Float
// vote_count : Int

const mapStateToProps = (state) => {
  return {
    darkMode: state.GlobalSettings.darkMode
  }
}

export default connect(mapStateToProps)(MovieScreen);
