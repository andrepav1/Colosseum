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
import TVShowsPosterScrollView from '../components/TVShowsPosterScrollView';
import MoviesCastScrollView from '../components/MoviesCastScrollView';
import MoviesBackdropImagesCarousel from '../components/MoviesBackdropImagesCarousel';
import MovieVideosCarousel from '../components/MovieVideosCarousel';
import TVSeasonsView from '../components/TVSeasonsView'

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

import { useQuery } from '@apollo/react-hooks';

// GraphQL Queries
import { 
  TV_INFO,
  TV_VIDEOS,
  TV_SIMILAR,
  TV_BACKDROP_IMAGES,
  TV_KEYWORDS,
  TV_CAST
} from '../gqlQueries'

const IMAGE_PATH = 'http://image.tmdb.org/t/p/w780/';

import {connect} from 'react-redux';

function TVShowScreen({ navigation, route, darkMode }) {
  
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

  const responses = {
    tvInfoResponse: useQuery(TV_INFO, { variables: { tv_id: route.params.id }}),
    tvSimilarResponse: useQuery(TV_SIMILAR, { variables: { tv_id: route.params.id }}),
    tvVideosResponse: useQuery(TV_VIDEOS, { variables: { tv_id: route.params.id }}),
    tvBackdropImagesResponse: useQuery(TV_BACKDROP_IMAGES, { variables: { tv_id: route.params.id }}),
    tvKeywordsResponse: useQuery(TV_KEYWORDS, { variables: { tv_id: route.params.id }}),
    tvCastResponse: useQuery(TV_CAST, { variables: { tv_id: route.params.id }})
  }

  // =================================================================
  // Rendering loading component when data is loading 
  for(const res in responses) { if (responses[res].loading) return <DataLoadingComponent darkMode={darkMode} /> };
  
  // =================================================================
  // Rendering loading component when data is refetching 
  for(const res in responses) { if (responses[res].networkStatus == 4) return <DataLoadingComponent darkMode={darkMode} /> };
  
  // =================================================================
  // Rendering error component if at least one error occurs 
  for(const res in responses) { if (responses[res].error) return <DataLoadingComponent DataErrorComponent={response} darkMode={darkMode} /> };

  // =================================================================
  // DESTRUCTURING RESPONSE OBJECTS
  const { data: { tvInfo }} = responses.tvInfoResponse;
  const { data: { tvSimilar }} = responses.tvSimilarResponse;
  const { data: { tvVideos }} = responses.tvVideosResponse;
  const { data: { tvImages: { backdrops } }} = responses.tvBackdropImagesResponse;
  const { data: { tvKeywords } } = responses.tvKeywordsResponse;
  const { data: { tvCredits: { cast } } } = responses.tvCastResponse;

  // =================================================================
  // Other functions
  
  const getOverview = () => tvInfo.overview?(<MonoText style={darkMode?Style.smallLightText:Style.smallDarkText}>{tvInfo.overview}</MonoText>):null;
  
  const genrePressedHandler = (genre) => {
    navigation.navigate("MultipleMoviesScreen", { query: "DISCOVER_TV", variables: { with_genres: genre.id, page: 1 }, titleQuery: genre.name });
  }
  
  const keywordPressedHandler = (keyword) => {
    navigation.navigate("MultipleMoviesScreen", { query: "DISCOVER_TV", variables: { with_keywords: keyword.id, page: 1 }, titleQuery: keyword.name });
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

    const ytVideos = tvVideos.filter(movie => movie.site !== "youtube");
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
          <MonoTextBold style={[darkMode?Style.largeLightText:Style.largeDarkText,{ marginBottom: 2, marginTop: 8 }]}>{tvInfo.name}</MonoTextBold>
          { getOverview() }
        </View>

        <View style={{ width: width-20, marginLeft: 2, flexDirection: "row", flexWrap: 'wrap', marginBottom: 8 }}>
          {
            tvInfo.genres.map(item => (
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

        <TVSeasonsView tvShow={tvInfo} darkMode={darkMode} nav={navigation} images={backdrops} />
        
        <MoviesBackdropImagesCarousel images={backdrops} nav={navigation} darkMode={darkMode} />

        <MovieVideosCarousel videos={tvVideos} nav={navigation} darkMode={darkMode} />

        <View style={{ width: width-20, marginLeft: 10, flexDirection: "column", marginBottom: 8 }}>
          <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ marginBottom: 8 }]}>Details</MonoTextBold>
          {
            tvInfo.original_name &&
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "45%" }]}>Original Name:</MonoTextBold>
              <MonoText style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "55%" }]}>{tvInfo.original_name}</MonoText>
            </View>
          }
          {/* {
            tvInfo.original_language &&
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "45%" }]}>Original Language:</MonoTextBold>
              <MonoText style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "55%" }]}>{tvInfo.original_language}</MonoText>
            </View>
          }
          {
            tvInfo.spoken_languages.length > 0 &&
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "45%" }]}>Spoken Languages:</MonoTextBold>
              <MonoText style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "55%" }]}>{tvInfo.spoken_languages.map(lang => lang.name + ", ")}</MonoText>
            </View>
          }
          {
            tvInfo.production_companies.length > 0 &&
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "45%" }]}>Production Companies:</MonoTextBold>
              <MonoText style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "55%" }]}>{tvInfo.production_companies.map(company => company.name + ", ")}</MonoText>
            </View>
          }
          {
            tvInfo.production_countries.length > 0 &&
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "45%" }]}>Production Countries:</MonoTextBold>
              <MonoText style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "55%" }]}>{tvInfo.production_countries.map(country => country.name + ", ")}</MonoText>
            </View>
          }
          {
            tvInfo.runtime !== null &&
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <MonoTextBold style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "45%" }]}>Runtime:</MonoTextBold>
              <MonoText style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "55%" }]}>±{tvInfo.runtime} minutes</MonoText>
            </View>
          } */}
        </View>
        
        <View style={{ width: width-20, marginLeft: 8, flexDirection: "row", flexWrap:'wrap', marginBottom: 8 }}>
          {
            tvKeywords.map(item => (
              <TouchableWithoutFeedback key={uuid()} onPress={() => keywordPressedHandler(item)}>
                <View key={uuid()} style={{ backgroundColor: "#88888822", borderRadius: 16, margin: 2, paddingVertical: 2, paddingHorizontal: 4, }}>
                  <MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>{ "#" + item.name.replace(/ /g,"-" )}</MonoTextBold>
                </View>
              </TouchableWithoutFeedback>
            ))
          }
        </View>

        { tvSimilar.length > 0 && <Divider style={[darkMode?Style.lightDividerStyle:Style.darkDividerStyle,{ marginVertical: 8 }]} /> }

        <TVShowsPosterScrollView sectionName={"Similar TV Shows"} tvShows={tvSimilar} darkMode={darkMode} nav={navigation} />

      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.GlobalSettings.darkMode
  }
}

export default connect(mapStateToProps)(TVShowScreen);
