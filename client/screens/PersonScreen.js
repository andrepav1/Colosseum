import * as React from 'react';
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Lightbox from 'react-native-lightbox';

// app components
import { MonoText, MonoTextBold } from '../components/StyledText';
import DataLoadingComponent from '../components/DataLoadingComponent';
import DataErrorComponent from '../components/DataErrorComponent';
import MoviesPosterImagesCarousel from '../components/MoviesPosterImagesCarousel';
import PersonMoviesCastScrollView from '../components/PersonMoviesCastScrollView';
import PersonMoviesCrewScrollView from '../components/PersonMoviesCrewScrollView';
import PersonTVShowCastScrollView from '../components/PersonTVShowCastScrollView';
import PersonTVShowCrewScrollView from '../components/PersonTVShowCrewScrollView';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';
const { width, height } = Layout.window;

import { useQuery } from '@apollo/react-hooks';

// GraphQL Queries
import { 
  PERSON_INFO,
  PERSON_MOVIE_CREDITS,
  PERSON_TV_CREDITS,
  PERSON_IMAGES
} from '../gqlQueries'

const PROFILE_PATH = 'https://image.tmdb.org/t/p/w780/';

import {connect} from 'react-redux';

function PersonScreen({ navigation, route, darkMode }) {
  
  // =================================================================
  // React Hooks
  const [biographyExpanded, setBiographyExpanded] = React.useState(false);

  // =================================================================
  // useQuery Hooks
  const personInfoResponse = useQuery(PERSON_INFO, { variables: { id: route.params.id }});
  const personMovieCreditsResponse = useQuery(PERSON_MOVIE_CREDITS, { variables: { id: route.params.id }});
  const personImagesResponse = useQuery(PERSON_IMAGES, { variables: { id: route.params.id }});
  const personTVShowResponse = useQuery(PERSON_TV_CREDITS, { variables: { id: route.params.id }});

  // =================================================================
  // Rendering loading component when data is loading 
  if (personInfoResponse.loading) return <DataLoadingComponent />;
  if (personMovieCreditsResponse.loading) return <DataLoadingComponent />;
  if (personImagesResponse.loading) return <DataLoadingComponent />;
  if (personTVShowResponse.loading) return <DataLoadingComponent />;
  
  // =================================================================
  // Rendering loading component when data is refetching 
  if (personInfoResponse.networkStatus == 4) return <DataLoadingComponent />;
  if (personMovieCreditsResponse.networkStatus == 4) return <DataLoadingComponent />;
  if (personImagesResponse.networkStatus == 4) return <DataLoadingComponent />;
  if (personTVShowResponse.networkStatus == 4) return <DataLoadingComponent />;
  
  // =================================================================
  // Rendering error component if at least one error occurs 
  if (personInfoResponse.error) return <DataErrorComponent props={personInfoResponse}/>;
  if (personMovieCreditsResponse.error) return <DataErrorComponent props={personMovieCreditsResponse}/>;
  if (personImagesResponse.error) return <DataErrorComponent props={personImagesResponse}/>;
  if (personTVShowResponse.error) return <DataErrorComponent props={personTVShowResponse}/>;

  // =================================================================
  // DESTRUCTURING RESPONSE OBJECTS
  const { data: { personInfo }} = personInfoResponse;
  const { data: { personMovieCredits: { crew: crewMovies, cast: castMovies } }} = personMovieCreditsResponse;
  const { data: { personImages }} = personImagesResponse;
  const { data: { personTvCredits: { crew: crewTvShows, cast: castTvShows } }} = personTVShowResponse;
  
  // console.log(personInfo)
  // console.log(personMovieCredits)
  // console.log(personImages)
  // console.log(castTvShows)

  const getBiography = (expanded) => {
    
    const wordCount = 50;

    if(expanded || personInfo.biography.length < wordCount) {
      return (
        <MonoText style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "92%", marginBottom: 8 }]}>{personInfo.biography}</MonoText>
      )
    }
    else {
      return (
        <MonoText style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: "92%" }]}>{personInfo.biography.split(" ").slice(0, wordCount).join(" ")+"..."}      
          <TouchableWithoutFeedback onPress={() => { setBiographyExpanded(true) }}>
            <MonoText style={[darkMode?Style.smallLightText:Style.smallDarkText,{ color: Colors.linkText }]}>expand</MonoText>
          </TouchableWithoutFeedback>
        </MonoText>
      )
    }

  }

  const getDates = () => {
    if(personInfo.deathday) {
      return (
        <View style={{ flexDirection: "row", marginLeft: 4 }}>
          <MaterialCommunityIcons name="pine-tree" size={18} color={darkMode?"#DDDDDDFF":"black"} style={{ bottom: 1, right: 4 }} />
          <MonoText style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: width - 180, fontSize: 14 }]}>{personInfo.birthday} - {personInfo.deathday}</MonoText> 
        </View>
      )
    }
    else if(personInfo.birthday){
      let birthdayArray = personInfo.birthday.split('-')
      let birthday = new Date(birthdayArray[0], birthdayArray[1], birthdayArray[2])
      let ageDate = new Date(Date.now() - birthday.getTime()); // miliseconds from epoch
      let age = Math.abs(ageDate.getUTCFullYear() - 1970);
      let ageString = age?" (" + age + " years)":"";
      return (
        <View style={{ flexDirection: "row", marginLeft: 4 }}>
          <MaterialCommunityIcons name="pine-tree" size={19} color={darkMode?"#DDDDDDFF":"black"} style={{ bottom: 1, right: 4 }} />
          <MonoText style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: width - 180, fontSize: 14 }]}>{personInfo.birthday + ageString}</MonoText> 
        </View>
      )
    }
    else {
      return (
        <View style={{ flexDirection: "row", marginLeft: 4 }}>
          <MaterialCommunityIcons name="pine-tree" size={19} color={darkMode?"#DDDDDDFF":"black"} style={{ bottom: 1, right: 4 }} />
          <MonoText style={[darkMode?Style.smallLightText:Style.smallDarkText,{ width: width - 180, fontSize: 14 }]}>{personInfo.birthday}</MonoText> 
        </View>
      )
    }

  }
  
  // =================================================================
  // SCREEN RENDERING
  
  return (
    <View style={{ flex:1 }}>
      <ScrollView style={darkMode?Style.darkContainer:Style.lightContainer} contentContainerStyle={{ paddingTop: 0 }}>

        <View style={{ flex: 1, flexDirection: "row", marginTop: 8, marginLeft: 10, marginBottom: 10 }}>
          
          <View style={{ borderRadius: 60, overflow: "hidden", height: 120, width: 120 }}>
            <Lightbox activeProps={{ resizeMode: "contain",  backgroundColor: "transparent" }}>
              <Image source={{ uri: PROFILE_PATH + personInfo.profile_path }} style={{ resizeMode: "cover", width: "100%", height: "100%", backgroundColor: "#66666666" }}/>
            </Lightbox>
          </View>
        
          <View style={{ paddingTop: 10, paddingLeft: 10 }}>
            <MonoTextBold style={[darkMode?Style.largeLightText:Style.largeDarkText,{ paddingLeft: 0 }]}>{personInfo.name}</MonoTextBold>
            <View style={{ flexDirection: "row", marginVertical: 4, marginLeft: 4.5 }}>
              <FontAwesome name="map-pin" size={16} color={darkMode?"#DDDDDDFF":"black"} style={{bottom: 0 }} />
              <MonoText style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ marginLeft: 8, width: width - 180, fontSize: 15 }]}>{personInfo.place_of_birth}</MonoText>
            </View>
            { getDates() }
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
        {
          getBiography(biographyExpanded)
        }
        </View>

        <PersonMoviesCastScrollView movies={castMovies} nav={navigation} darkMode={darkMode} />
        <PersonTVShowCastScrollView tvShows={castTvShows} nav={navigation} darkMode={darkMode} />
        
        <PersonMoviesCrewScrollView movies={crewMovies} nav={navigation} darkMode={darkMode} />
        <PersonTVShowCrewScrollView tvShows={crewTvShows} nav={navigation} darkMode={darkMode} />
        
        <MoviesPosterImagesCarousel images={personImages} nav={navigation} darkMode={darkMode} />
        
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.GlobalSettings.darkMode
  }
}

export default connect(mapStateToProps)(PersonScreen);
