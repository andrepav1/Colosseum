import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';

// app components
import { MonoText } from '../components/StyledText';
import MoviesPosterScrollView from '../components/MoviesPosterScrollView';
import MoviesScrollView from '../components/MoviesScrollView';
import MoviesCarousel from '../components/MoviesCarousel';

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';

export default function ExploreScreen() {

  const pressHandling = () => {

  }

  return (
    <View style={{ flex:1 }}>
      <ScrollView style={Style.lightContainer} contentContainerStyle={{paddingTop: 0 }}>

        <MoviesCarousel movies={getMovies()} />
        <MoviesPosterScrollView sectionName={"Popular Now"} movies={getMoviesTwo()} />
        <Divider style={styles.dividerStyle} />
        <MoviesScrollView movies={getMoviesThree()} />
        <Divider style={styles.dividerStyle} />
        <MoviesPosterScrollView sectionName={"At the Cinema"} movies={getMovies()} />
        <MoviesPosterScrollView sectionName={"Colossal Movies"} movies={getMoviesThree()} />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  dividerStyle: {
    backgroundColor: "#00000055", 
    width: "92%", 
    alignSelf: "center",
  }
});

const getMovies = () => [
  {
      "popularity": 152.663,
      "vote_count": 439,
      "video": false,
      "poster_path": "/tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
      "id": 475430,
      "adult": false,
      "backdrop_path": "/o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
      "original_language": "en",
      "original_title": "Artemis Fowl",
      "genre_ids": [
          12,
          14,
          878,
          10751
      ],
      "title": "Artemis Fowl",
      "vote_average": 5.9,
      "overview": "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
      "release_date": "2020-06-12"
  },
  {
      "popularity": 145.441,
      "vote_count": 3794,
      "video": false,
      "poster_path": "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
      "id": 419704,
      "adult": false,
      "backdrop_path": "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
      "original_language": "en",
      "original_title": "Ad Astra",
      "genre_ids": [
          18,
          878
      ],
      "title": "Ad Astra",
      "vote_average": 6.1,
      "overview": "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
      "release_date": "2019-09-17"
  },
  {
      "popularity": 122.926,
      "vote_count": 153,
      "video": false,
      "poster_path": "/qnlChF8U4diiykXQYs1miigGy7t.jpg",
      "id": 706503,
      "adult": false,
      "backdrop_path": "/t4mzypFVjY6toyBXAmfrIaWcUXa.jpg",
      "original_language": "fr",
      "original_title": "Balle perdue",
      "genre_ids": [
          28,
          80,
          53
      ],
      "title": "Lost Bullet",
      "vote_average": 6.8,
      "overview": "A small time delinquent, turned police mechanic for a go fast task force, is forced to defend his innocence when his mentor is killed by dirty cops.",
      "release_date": "2020-06-19"
  },
  {
      "popularity": 75.882,
      "vote_count": 13,
      "video": false,
      "poster_path": "/1Duc3EBiegywczxTWekvy03HWai.jpg",
      "id": 554993,
      "adult": false,
      "backdrop_path": "/oCFbh4Mrd0fuGanCgIF6sG27WGD.jpg",
      "original_language": "sv",
      "original_title": "Britt-Marie var här",
      "genre_ids": [
          35,
          18
      ],
      "title": "Britt-Marie Was Here",
      "vote_average": 5.2,
      "overview": "Britt-Marie, a woman in her sixties, decides to leave her husband and start anew. Having been housewife for most of her life and and living in small backwater town of Borg, there isn't many jobs available and soon she finds herself fending a youth football team.",
      "release_date": "2019-01-25"
  },
  {
      "popularity": 86.915,
      "vote_count": 100,
      "video": false,
      "poster_path": "/hL2uecLh2rTTbuVbOriXP0PhqIJ.jpg",
      "id": 509585,
      "adult": false,
      "backdrop_path": "/akAbe8Lddj4J4vaT68EUVMufXZt.jpg",
      "original_language": "en",
      "original_title": "7500",
      "genre_ids": [
          18,
          53
      ],
      "title": "7500",
      "vote_average": 6,
      "overview": "When terrorists try to seize control of a Berlin-Paris flight, a soft-spoken young American co-pilot struggles to save the lives of the passengers and crew while forging a surprising connection with one of the hijackers.",
      "release_date": "2019-12-26"
  },
  {
      "popularity": 106.057,
      "vote_count": 4768,
      "video": false,
      "poster_path": "/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
      "id": 454626,
      "adult": false,
      "backdrop_path": "/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg",
      "original_language": "en",
      "original_title": "Sonic the Hedgehog",
      "genre_ids": [
          28,
          35,
          878,
          10751
      ],
      "title": "Sonic the Hedgehog",
      "vote_average": 7.5,
      "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
      "release_date": "2020-02-12"
  },
  {
      "popularity": 92.406,
      "vote_count": 8111,
      "video": false,
      "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      "id": 496243,
      "adult": false,
      "backdrop_path": "/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
      "original_language": "ko",
      "original_title": "기생충",
      "genre_ids": [
          35,
          18,
          53
      ],
      "title": "Parasite",
      "vote_average": 8.5,
      "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      "release_date": "2019-05-30"
  },
  {
      "popularity": 104.209,
      "vote_count": 226,
      "video": false,
      "poster_path": "/Af2jt7m9GLFpR4V11xOsFmT8OKD.jpg",
      "id": 707886,
      "adult": false,
      "backdrop_path": "/fZBQOScjDT8TAipEyCkLVeDTu5c.jpg",
      "original_language": "en",
      "original_title": "Feel the Beat",
      "genre_ids": [
          35,
          18,
          10402
      ],
      "title": "Feel the Beat",
      "vote_average": 8.1,
      "overview": "After failing to make it on Broadway, April returns to her hometown and reluctantly begins training a misfit group of young dancers for a competition.",
      "release_date": "2020-06-19"
  },
  {
      "popularity": 81.591,
      "vote_count": 40,
      "video": false,
      "poster_path": "/2Gi9ZA4kRKKsWguUoTvIyj40dxF.jpg",
      "id": 514593,
      "adult": false,
      "backdrop_path": "/chAGSv4DB9s3fsgULpSZQLN7LgN.jpg",
      "original_language": "en",
      "original_title": "You Should Have Left",
      "genre_ids": [
          27,
          9648
      ],
      "title": "You Should Have Left",
      "vote_average": 5,
      "overview": "In an effort to repair their relationship, a couple books a vacation in the countryside for themselves and their daughter. What starts as a perfect retreat begins to fall apart as one loses their grip on reality, and a sinister force tries to tear them apart.",
      "release_date": "2020-06-19"
  },
  {
      "popularity": 80.726,
      "vote_count": 13370,
      "video": false,
      "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      "id": 475557,
      "adult": false,
      "backdrop_path": "/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
      "original_language": "en",
      "original_title": "Joker",
      "genre_ids": [
          80,
          18,
          53
      ],
      "title": "Joker",
      "vote_average": 8.2,
      "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      "release_date": "2019-10-02"
  },
  {
      "popularity": 81.985,
      "vote_count": 2215,
      "video": false,
      "poster_path": "/5EufsDwXdY2CVttYOk2WtYhgKpa.jpg",
      "id": 570670,
      "adult": false,
      "backdrop_path": "/uZMZyvarQuXLRqf3xdpdMqzdtjb.jpg",
      "original_language": "en",
      "original_title": "The Invisible Man",
      "genre_ids": [
          27,
          878,
          53
      ],
      "title": "The Invisible Man",
      "vote_average": 7.2,
      "overview": "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
      "release_date": "2020-02-26"
  },
  {
      "popularity": 75.21,
      "vote_count": 4671,
      "video": false,
      "poster_path": "/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
      "id": 495764,
      "adult": false,
      "backdrop_path": "/9xNOiv6DZZjH7ABoUUDP0ZynouU.jpg",
      "original_language": "en",
      "original_title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
      "genre_ids": [
          28,
          35,
          80
      ],
      "title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
      "vote_average": 7.2,
      "overview": "Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.",
      "release_date": "2020-02-05"
  },
  {
      "popularity": 80.352,
      "vote_count": 9946,
      "video": false,
      "poster_path": "/xT98tLqatZPQApyRmlPL12LtiWp.jpg",
      "id": 122917,
      "adult": false,
      "backdrop_path": "/bVmSXNgH1gpHYTDyF9Q826YwJT5.jpg",
      "original_language": "en",
      "original_title": "The Hobbit: The Battle of the Five Armies",
      "genre_ids": [
          28,
          12,
          14
      ],
      "title": "The Hobbit: The Battle of the Five Armies",
      "vote_average": 7.3,
      "overview": "Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands.",
      "release_date": "2014-12-10"
  },
  {
      "popularity": 87.771,
      "vote_count": 18656,
      "video": false,
      "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      "id": 299536,
      "adult": false,
      "backdrop_path": "/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
      "original_language": "en",
      "original_title": "Avengers: Infinity War",
      "genre_ids": [
          28,
          12,
          878
      ],
      "title": "Avengers: Infinity War",
      "vote_average": 8.3,
      "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      "release_date": "2018-04-25"
  },
  {
      "popularity": 74.852,
      "vote_count": 17269,
      "video": false,
      "poster_path": "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
      "id": 671,
      "adult": false,
      "backdrop_path": "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
      "original_language": "en",
      "original_title": "Harry Potter and the Philosopher's Stone",
      "genre_ids": [
          12,
          14,
          10751
      ],
      "title": "Harry Potter and the Philosopher's Stone",
      "vote_average": 7.9,
      "overview": "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
      "release_date": "2001-11-16"
  },
  {
      "popularity": 86.515,
      "vote_count": 0,
      "video": false,
      "poster_path": "/ucktgbaMSaETUDLUBp1ubGD6aNj.jpg",
      "id": 619592,
      "adult": false,
      "backdrop_path": "/jAtO4ci8Tr5jDmg33XF3OZ8VPah.jpg",
      "original_language": "en",
      "original_title": "Force of Nature",
      "genre_ids": [
          28,
          18
      ],
      "title": "Force of Nature",
      "vote_average": 0,
      "overview": "A gang of thieves plan a heist during a hurricane and encounter trouble when a disgraced cop tries to force everyone in the building to evacuate.",
      "release_date": "2020-07-02"
  },
  {
      "popularity": 77.163,
      "vote_count": 6235,
      "video": false,
      "poster_path": "/ykUEbfpkf8d0w49pHh0AD2KrT52.jpg",
      "id": 420817,
      "adult": false,
      "backdrop_path": "/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg",
      "original_language": "en",
      "original_title": "Aladdin",
      "genre_ids": [
          12,
          35,
          14,
          10749,
          10751
      ],
      "title": "Aladdin",
      "vote_average": 7.1,
      "overview": "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
      "release_date": "2019-05-22"
  },
  {
      "popularity": 77.991,
      "vote_count": 5503,
      "video": false,
      "poster_path": "/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
      "id": 530915,
      "adult": false,
      "backdrop_path": "/cqa3sa4c4jevgnEJwq3CMF8UfTG.jpg",
      "original_language": "en",
      "original_title": "1917",
      "genre_ids": [
          28,
          18,
          36,
          10752
      ],
      "title": "1917",
      "vote_average": 7.9,
      "overview": "At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.",
      "release_date": "2019-12-25"
  },
  {
      "popularity": 79.325,
      "vote_count": 4979,
      "video": false,
      "poster_path": "/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
      "id": 181812,
      "adult": false,
      "backdrop_path": "/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg",
      "original_language": "en",
      "original_title": "Star Wars: The Rise of Skywalker",
      "genre_ids": [
          28,
          12,
          878
      ],
      "title": "Star Wars: The Rise of Skywalker",
      "vote_average": 6.5,
      "overview": "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
      "release_date": "2019-12-18"
  },
  {
      "popularity": 76.776,
      "vote_count": 221,
      "video": false,
      "poster_path": "/yx4cp1ljJMDSFeEex0Zjv45b55E.jpg",
      "id": 581859,
      "adult": false,
      "backdrop_path": "/Aq5Zhj9iaTF6BEKNk05dlUxeHKa.jpg",
      "original_language": "en",
      "original_title": "Da 5 Bloods",
      "genre_ids": [
          18,
          10752
      ],
      "title": "Da 5 Bloods",
      "vote_average": 6.9,
      "overview": "Four African-American Vietnam veterans return to Vietnam. They are in search of the remains of their fallen squad leader and the promise of buried treasure. These heroes battle forces of humanity and nature while confronted by the lasting ravages of the immorality of the Vietnam War.",
      "release_date": "2020-06-12"
  }
];

const getMoviesTwo = () => [
  {
      "popularity": 74.852,
      "vote_count": 17269,
      "video": false,
      "poster_path": "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
      "id": 671,
      "adult": false,
      "backdrop_path": "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
      "original_language": "en",
      "original_title": "Harry Potter and the Philosopher's Stone",
      "genre_ids": [
          12,
          14,
          10751
      ],
      "title": "Harry Potter and the Philosopher's Stone",
      "vote_average": 7.9,
      "overview": "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
      "release_date": "2001-11-16"
  },
  {
      "popularity": 68.883,
      "vote_count": 2323,
      "video": false,
      "poster_path": "/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
      "id": 508439,
      "adult": false,
      "backdrop_path": "/dW6yBuKwiMeronJZw8kozYLMorB.jpg",
      "original_language": "en",
      "original_title": "Onward",
      "genre_ids": [
          12,
          16,
          35,
          14,
          10751
      ],
      "title": "Onward",
      "vote_average": 7.9,
      "overview": "In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.",
      "release_date": "2020-02-29"
  },
  {
      "popularity": 66.047,
      "vote_count": 12754,
      "video": false,
      "poster_path": "/tQf4DUygWo64AOuqgk4jEDCE3Ws.jpg",
      "id": 210577,
      "adult": false,
      "backdrop_path": "/x9ezMgOtDPqHatHDvxEG0ILb6Ie.jpg",
      "original_language": "en",
      "original_title": "Gone Girl",
      "genre_ids": [
          18,
          9648,
          53
      ],
      "title": "Gone Girl",
      "vote_average": 7.9,
      "overview": "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
      "release_date": "2014-10-01"
  },
  {
      "popularity": 64.74,
      "vote_count": 8,
      "video": false,
      "poster_path": "/jUVbqKcDgcLSS5s4UV82XUkMKlU.jpg",
      "id": 684700,
      "adult": false,
      "backdrop_path": "/pKItm4sW0Xji31QXm8YiAmCGo4b.jpg",
      "original_language": "en",
      "original_title": "Athlete A",
      "genre_ids": [
          99
      ],
      "title": "Athlete A",
      "vote_average": 7.1,
      "overview": "Follow the Indianapolis Star reporters that broke the story about USA Gymnastics doctor Larry Nassar's abuse and hear from gymnasts.",
      "release_date": "2020-06-24"
  },
  {
      "popularity": 64.342,
      "vote_count": 2503,
      "video": false,
      "poster_path": "/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
      "id": 545609,
      "adult": false,
      "backdrop_path": "/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg",
      "original_language": "en",
      "original_title": "Extraction",
      "genre_ids": [
          28,
          18,
          53
      ],
      "title": "Extraction",
      "vote_average": 7.4,
      "overview": "Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord…",
      "release_date": "2020-04-24"
  },
  {
      "popularity": 64.259,
      "vote_count": 2474,
      "video": false,
      "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
      "id": 290859,
      "adult": false,
      "backdrop_path": "/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg",
      "original_language": "en",
      "original_title": "Terminator: Dark Fate",
      "genre_ids": [
          28,
          12,
          878
      ],
      "title": "Terminator: Dark Fate",
      "vote_average": 6.5,
      "overview": "Decades after Sarah Connor prevented Judgment Day, a lethal new Terminator is sent to eliminate the future leader of the resistance. In a fight to save mankind, battle-hardened Sarah Connor teams up with an unexpected ally and an enhanced super soldier to stop the deadliest Terminator yet.",
      "release_date": "2019-10-23"
  },
  {
      "popularity": 63.166,
      "vote_count": 145,
      "video": false,
      "poster_path": "/8Ga1CI4ZIIF8fxyfjZ5sNlb75e4.jpg",
      "id": 667520,
      "adult": false,
      "backdrop_path": "/eHTZoXmB4vnDqANZXPZcdAiYQo5.jpg",
      "original_language": "ja",
      "original_title": "泣きたい私は猫をかぶる",
      "genre_ids": [
          16,
          18,
          14,
          10749
      ],
      "title": "A Whisker Away",
      "vote_average": 8.2,
      "overview": "Miyo \"Muge\" Sasaki is a peculiar second-year junior high student who has fallen in love with her classmate Kento Hinode. Muge resolutely pursues Kento every day, but he takes no notice of her. Nevertheless, while carrying a secret she can tell no one, Muge continues to pursue Kento. Muge discovers a magic mask that allows her to transform into a cat named Tarō. The magic lets Muge get close to Kento, but eventually it may also make her unable to transform back to a human.",
      "release_date": "2020-06-18"
  },
  {
      "popularity": 63.03,
      "vote_count": 72,
      "video": false,
      "poster_path": "/fOvqEunubL3wPskvtk2Ficfl0pH.jpg",
      "id": 451184,
      "adult": false,
      "backdrop_path": "/72r4uAQGsa8KEv0DB2TpSu31lEB.jpg",
      "original_language": "en",
      "original_title": "Wasp Network",
      "genre_ids": [
          18,
          36,
          53
      ],
      "title": "Wasp Network",
      "vote_average": 6.5,
      "overview": "Havana, Cuba, 1990. René González, an airplane pilot, unexpectedly flees the country, leaving behind his wife Olga and his daughter Irma, and begins a new life in Miami, where he becomes a member of an anti-Castro organization.",
      "release_date": "2020-01-29"
  },
  {
      "popularity": 62.124,
      "vote_count": 0,
      "video": false,
      "poster_path": "/nPx3juctkdZvgrJ4DO35dUnVsyF.jpg",
      "id": 595148,
      "adult": false,
      "backdrop_path": "/t39n8yGBRW94sGm662V3ylpimQI.jpg",
      "original_language": "en",
      "original_title": "Irresistible",
      "genre_ids": [
          35,
          18
      ],
      "title": "Irresistible",
      "vote_average": 0,
      "overview": "A Democratic political consultant helps a retired Marine colonel run for mayor in a small, conservative Wisconsin town.",
      "release_date": "2020-06-26"
  },
  {
      "popularity": 61.448,
      "vote_count": 22806,
      "video": false,
      "poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      "id": 157336,
      "adult": false,
      "backdrop_path": "/9mmkq59uRuJWDFz9UHeX5ATNJYf.jpg",
      "original_language": "en",
      "original_title": "Interstellar",
      "genre_ids": [
          12,
          18,
          878
      ],
      "title": "Interstellar",
      "vote_average": 8.3,
      "overview": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      "release_date": "2014-11-05"
  },
  {
      "popularity": 60.856,
      "vote_count": 7671,
      "video": false,
      "poster_path": "/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
      "id": 429617,
      "adult": false,
      "backdrop_path": "/3o4NzKxeGSSsrrHnwGKrd3qHK0V.jpg",
      "original_language": "en",
      "original_title": "Spider-Man: Far from Home",
      "genre_ids": [
          28,
          12,
          878
      ],
      "title": "Spider-Man: Far from Home",
      "vote_average": 7.5,
      "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
      "release_date": "2019-06-28"
  },
  {
      "popularity": 60.152,
      "vote_count": 4632,
      "video": false,
      "poster_path": "/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
      "id": 546554,
      "adult": false,
      "backdrop_path": "/AbRYlvwAKHs0YuyNO6NX9ofq4l6.jpg",
      "original_language": "en",
      "original_title": "Knives Out",
      "genre_ids": [
          35,
          80,
          18,
          9648,
          53
      ],
      "title": "Knives Out",
      "vote_average": 7.8,
      "overview": "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
      "release_date": "2019-11-27"
  },
  {
      "popularity": 58.972,
      "vote_count": 2,
      "video": false,
      "poster_path": "/5xPfTKBa9R6YGcxWpfRzYHjk3IA.jpg",
      "id": 591774,
      "adult": false,
      "backdrop_path": "/cSVsGJCDB2TZ3aJMrvfOInW8jqg.jpg",
      "original_language": "en",
      "original_title": "Run with the Hunted",
      "genre_ids": [
          80,
          18,
          53
      ],
      "title": "Run with the Hunted",
      "vote_average": 3.5,
      "overview": "Oscar, a young boy, commits a noble murder and is forced to runaway from his rural hometown, leaving behind his best friend, Loux. He escapes to the nearest city, where he is inducted into a gang of child street thieves. His innocence slips away as he is introduced to love, murder, and corruption. 15 years later, he has forgotten his past and become the leader of this band of lost children. When Loux moves to the city in search of work, she takes a job with a struggling private investigator. Stumbling upon Oscar's missing child report, she takes it upon herself to find the boy who saved her life.",
      "release_date": "2020-06-26"
  },
  {
      "popularity": 58.061,
      "vote_count": 4435,
      "video": false,
      "poster_path": "/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
      "id": 38700,
      "adult": false,
      "backdrop_path": "/upUy2QhMZEmtypPW3PdieKLAHxh.jpg",
      "original_language": "en",
      "original_title": "Bad Boys for Life",
      "genre_ids": [
          28,
          80,
          53
      ],
      "title": "Bad Boys for Life",
      "vote_average": 7.2,
      "overview": "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
      "release_date": "2020-01-15"
  },
  {
      "popularity": 57.192,
      "vote_count": 26249,
      "video": false,
      "poster_path": "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      "id": 27205,
      "adult": false,
      "backdrop_path": "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      "original_language": "en",
      "original_title": "Inception",
      "genre_ids": [
          28,
          12,
          878
      ],
      "title": "Inception",
      "vote_average": 8.3,
      "overview": "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
      "release_date": "2010-07-15"
  },
  {
      "popularity": 55.867,
      "vote_count": 5062,
      "video": false,
      "poster_path": "/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
      "id": 330457,
      "adult": false,
      "backdrop_path": "/pNbmSYUtMd542OATplZIdtSWKyz.jpg",
      "original_language": "en",
      "original_title": "Frozen II",
      "genre_ids": [
          12,
          16,
          10751
      ],
      "title": "Frozen II",
      "vote_average": 7.3,
      "overview": "Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
      "release_date": "2019-11-20"
  },
  {
      "popularity": 54.778,
      "vote_count": 3,
      "video": false,
      "poster_path": "/4XYEqHqvcf6vxFhNyeKZz5xbUfV.jpg",
      "id": 714338,
      "adult": false,
      "backdrop_path": "/hwBFGNabkGv2ZIyFUnCTSSmprf7.jpg",
      "original_language": "hi",
      "original_title": "Bulbbul",
      "genre_ids": [
          14,
          27
      ],
      "title": "Bulbbul",
      "vote_average": 5.7,
      "overview": "A child bride grows up to be an enigmatic woman presiding over her household, harboring a painful past as supernatural murders of men plague her village.",
      "release_date": "2020-06-24"
  },
  {
      "popularity": 54.4,
      "vote_count": 6179,
      "video": false,
      "poster_path": "/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
      "id": 420818,
      "adult": false,
      "backdrop_path": "/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg",
      "original_language": "en",
      "original_title": "The Lion King",
      "genre_ids": [
          12,
          10751
      ],
      "title": "The Lion King",
      "vote_average": 7.2,
      "overview": "Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
      "release_date": "2019-07-12"
  },
  {
      "popularity": 53.432,
      "vote_count": 1819,
      "video": false,
      "poster_path": "/p69QzIBbN06aTYqRRiCOY1emNBh.jpg",
      "id": 501170,
      "adult": false,
      "backdrop_path": "/sZAXOoOMyCbBskmqR0f4LShxXtw.jpg",
      "original_language": "en",
      "original_title": "Doctor Sleep",
      "genre_ids": [
          18,
          14,
          27,
          53
      ],
      "title": "Doctor Sleep",
      "vote_average": 7.1,
      "overview": "Still irrevocably scarred by the trauma he endured as a child at the Overlook, Dan Torrance has fought to find some semblance of peace. But that peace is shattered when he encounters Abra, a courageous teenager with her own powerful extrasensory gift, known as the 'shine'. Instinctively recognising that Dan shares her power, Abra has sought him out, desperate for his help against the merciless Rose the Hat and her followers.",
      "release_date": "2019-10-30"
  },
  {
      "popularity": 53.119,
      "vote_count": 13852,
      "video": false,
      "poster_path": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
      "id": 11,
      "adult": false,
      "backdrop_path": "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg",
      "original_language": "en",
      "original_title": "Star Wars",
      "genre_ids": [
          28,
          12,
          878
      ],
      "title": "Star Wars",
      "vote_average": 8.2,
      "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
      "release_date": "1977-05-25"
  }
]

const getMoviesThree = () => [
  {
      "popularity": 52.667,
      "id": 807,
      "video": false,
      "vote_count": 13257,
      "vote_average": 8.3,
      "title": "Se7en",
      "release_date": "1995-09-22",
      "original_language": "en",
      "original_title": "Se7en",
      "genre_ids": [
          80,
          9648,
          53
      ],
      "backdrop_path": "/4U4q1zjIwCZTNkp6RKWkWPuC7uI.jpg",
      "adult": false,
      "overview": "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the \"seven deadly sins\" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.",
      "poster_path": "/GQP6noTBKsYiAYyn8PYXFcsSgH.jpg"
  },
  {
      "popularity": 52.094,
      "vote_count": 0,
      "video": false,
      "poster_path": "/3B2twt8I02cLAPHG6dkDpTFbgz5.jpg",
      "id": 521531,
      "adult": false,
      "backdrop_path": "/2jzaFlLVG63W1lcu5kExypLey9T.jpg",
      "original_language": "en",
      "original_title": "Followed",
      "genre_ids": [
          27,
          9648,
          53
      ],
      "title": "Followed",
      "vote_average": 0,
      "overview": "To gain more subscribers, a controversial vlogger stays at a cursed hotel with terrifying results.",
      "release_date": "2020-06-26"
  },
  {
      "popularity": 52.048,
      "vote_count": 2697,
      "video": false,
      "poster_path": "/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
      "id": 338762,
      "adult": false,
      "backdrop_path": "/lP5eKh8WOcPysfELrUpGhHJGZEH.jpg",
      "original_language": "en",
      "original_title": "Bloodshot",
      "genre_ids": [
          28,
          878
      ],
      "title": "Bloodshot",
      "vote_average": 7,
      "overview": "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
      "release_date": "2020-03-05"
  },
  {
      "popularity": 50.845,
      "vote_count": 11797,
      "video": false,
      "poster_path": "/2mxS4wUimwlLmI1xp6QW6NSU361.jpg",
      "id": 177572,
      "adult": false,
      "backdrop_path": "/4s2d3xdyqotiVNHTlTlJjrr3q0H.jpg",
      "original_language": "en",
      "original_title": "Big Hero 6",
      "genre_ids": [
          28,
          12,
          16,
          35,
          10751
      ],
      "title": "Big Hero 6",
      "vote_average": 7.8,
      "overview": "The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.",
      "release_date": "2014-10-24"
  },
  {
      "popularity": 50.813,
      "vote_count": 22593,
      "video": false,
      "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      "id": 155,
      "adult": false,
      "backdrop_path": "/cfT29Im5VDvjE0RpyKOSdCKZal7.jpg",
      "original_language": "en",
      "original_title": "The Dark Knight",
      "genre_ids": [
          28,
          80,
          18,
          53
      ],
      "title": "The Dark Knight",
      "vote_average": 8.4,
      "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      "release_date": "2008-07-16"
  },
  {
      "popularity": 50.781,
      "vote_count": 14414,
      "video": false,
      "poster_path": "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
      "id": 315635,
      "adult": false,
      "backdrop_path": "/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg",
      "original_language": "en",
      "original_title": "Spider-Man: Homecoming",
      "genre_ids": [
          28,
          12,
          18,
          878
      ],
      "title": "Spider-Man: Homecoming",
      "vote_average": 7.4,
      "overview": "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
      "release_date": "2017-07-05"
  },
  {
      "popularity": 50.42,
      "vote_count": 14429,
      "video": false,
      "poster_path": "/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
      "id": 672,
      "adult": false,
      "backdrop_path": "/bvRnPaai6JL7XHF4K6414DdSHro.jpg",
      "original_language": "en",
      "original_title": "Harry Potter and the Chamber of Secrets",
      "genre_ids": [
          12,
          14
      ],
      "title": "Harry Potter and the Chamber of Secrets",
      "vote_average": 7.7,
      "overview": "Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Adventure and danger await when bloody writing on a wall announces: The Chamber Of Secrets Has Been Opened. To save Hogwarts will require all of Harry, Ron and Hermione’s magical abilities and courage.",
      "release_date": "2002-11-13"
  },
  {
      "popularity": 50.189,
      "vote_count": 6136,
      "video": false,
      "poster_path": "/oZRVDpNtmHk8M1VYy1aeOWUXgbC.jpg",
      "id": 87101,
      "adult": false,
      "backdrop_path": "/2ZbnHeSwwwejcOa5DkSienBFLA8.jpg",
      "original_language": "en",
      "original_title": "Terminator Genisys",
      "genre_ids": [
          28,
          12,
          878,
          53
      ],
      "title": "Terminator Genisys",
      "vote_average": 5.9,
      "overview": "The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.",
      "release_date": "2015-06-23"
  },
  {
      "popularity": 48.511,
      "vote_count": 1757,
      "video": false,
      "poster_path": "/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg",
      "id": 423204,
      "adult": false,
      "backdrop_path": "/k2WyDw2NTUIWnuEs5gT7wgrCQg6.jpg",
      "original_language": "en",
      "original_title": "Angel Has Fallen",
      "genre_ids": [
          28,
          53
      ],
      "title": "Angel Has Fallen",
      "vote_average": 6.3,
      "overview": "After a treacherous attack, Secret Service agent Mike Banning is charged with attempting to assassinate President Trumbull. Chased by his own colleagues and the FBI, Banning begins a race against the clock to clear his name.",
      "release_date": "2019-08-21"
  },
  {
      "popularity": 48.492,
      "vote_count": 243,
      "video": false,
      "poster_path": "/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg",
      "id": 696374,
      "adult": false,
      "backdrop_path": "/fDTPiqCynPQIkojfzdeyRHpw99S.jpg",
      "original_language": "en",
      "original_title": "Gabriel's Inferno",
      "genre_ids": [
          10749
      ],
      "title": "Gabriel's Inferno",
      "vote_average": 8.8,
      "overview": "An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love.",
      "release_date": "2020-05-29"
  },
  {
      "popularity": 48.49,
      "vote_count": 4289,
      "video": false,
      "poster_path": "/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
      "id": 474350,
      "adult": false,
      "backdrop_path": "/8moTOzunF7p40oR5XhlDvJckOSW.jpg",
      "original_language": "en",
      "original_title": "It Chapter Two",
      "genre_ids": [
          14,
          27
      ],
      "title": "It Chapter Two",
      "vote_average": 6.8,
      "overview": "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
      "release_date": "2019-09-04"
  },
  {
      "popularity": 46.893,
      "vote_count": 4935,
      "video": false,
      "poster_path": "/azL2ThbJMIkts3ZMt3j1YgBUeDB.jpg",
      "id": 98566,
      "adult": false,
      "backdrop_path": "/3eGlcdyxqEN57TtU8ypx52V4JMs.jpg",
      "original_language": "en",
      "original_title": "Teenage Mutant Ninja Turtles",
      "genre_ids": [
          28,
          12,
          35,
          14,
          878
      ],
      "title": "Teenage Mutant Ninja Turtles",
      "vote_average": 5.9,
      "overview": "The city needs heroes. Darkness has settled over New York City as Shredder and his evil Foot Clan have an iron grip on everything from the police to the politicians. The future is grim until four unlikely outcast brothers rise from the sewers and discover their destiny as Teenage Mutant Ninja Turtles. The Turtles must work with fearless reporter April and her wise-cracking cameraman Vern Fenwick to save the city and unravel Shredder's diabolical plan.",
      "release_date": "2014-08-07"
  },
  {
      "popularity": 46.57,
      "vote_count": 17247,
      "video": false,
      "poster_path": "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
      "id": 120,
      "adult": false,
      "backdrop_path": "/vRQnzOn4HjIMX4LBq9nHhFXbsSu.jpg",
      "original_language": "en",
      "original_title": "The Lord of the Rings: The Fellowship of the Ring",
      "genre_ids": [
          28,
          12,
          14
      ],
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "vote_average": 8.3,
      "overview": "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
      "release_date": "2001-12-18"
  },
  {
      "popularity": 45.563,
      "vote_count": 1062,
      "video": false,
      "poster_path": "/jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg",
      "id": 385103,
      "adult": false,
      "backdrop_path": "/fKtYXUhX5fxMxzQfyUcQW9Shik6.jpg",
      "original_language": "en",
      "original_title": "Scoob!",
      "genre_ids": [
          12,
          16,
          35,
          9648,
          10751
      ],
      "title": "Scoob!",
      "vote_average": 8,
      "overview": "In Scooby-Doo’s greatest adventure yet, see the never-before told story of how lifelong friends Scooby and Shaggy first met and how they joined forces with young detectives Fred, Velma, and Daphne to form the famous Mystery Inc. Now, with hundreds of cases solved, Scooby and the gang face their biggest, toughest mystery ever: an evil plot to unleash the ghost dog Cerberus upon the world. As they race to stop this global “dogpocalypse,” the gang discovers that Scooby has a secret legacy and an epic destiny greater than anyone ever imagined.",
      "release_date": "2020-05-15"
  },
  {
      "popularity": 45.508,
      "vote_count": 15730,
      "video": false,
      "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      "id": 122,
      "adult": false,
      "backdrop_path": "/9DeGfFIqjph5CBFVQrD6wv9S7rR.jpg",
      "original_language": "en",
      "original_title": "The Lord of the Rings: The Return of the King",
      "genre_ids": [
          28,
          12,
          14
      ],
      "title": "The Lord of the Rings: The Return of the King",
      "vote_average": 8.5,
      "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
      "release_date": "2003-12-01"
  },
  {
      "popularity": 44.974,
      "vote_count": 14091,
      "video": false,
      "poster_path": "/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
      "id": 284053,
      "adult": false,
      "backdrop_path": "/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
      "original_language": "en",
      "original_title": "Thor: Ragnarok",
      "genre_ids": [
          28,
          12,
          35,
          14
      ],
      "title": "Thor: Ragnarok",
      "vote_average": 7.6,
      "overview": "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
      "release_date": "2017-10-25"
  },
  {
      "popularity": 44.88,
      "vote_count": 15037,
      "video": false,
      "poster_path": "/lRHE0vzf3oYJrhbsHXjIkF4Tl5A.jpg",
      "id": 150540,
      "adult": false,
      "backdrop_path": "/okJXzeIpbdx7q8rQjJwBNr8VTEk.jpg",
      "original_language": "en",
      "original_title": "Inside Out",
      "genre_ids": [
          16,
          35,
          18,
          10751
      ],
      "title": "Inside Out",
      "vote_average": 7.9,
      "overview": "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Riley's guiding emotions— Joy, Fear, Anger, Disgust and Sadness—live in Headquarters, the control centre inside Riley's mind, where they help advise her through everyday life and tries to keep things positive, but the emotions conflict on how best to navigate a new city, house and school.",
      "release_date": "2015-06-09"
  },
  {
      "popularity": 44.665,
      "vote_count": 13674,
      "video": false,
      "poster_path": "/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg",
      "id": 49051,
      "adult": false,
      "backdrop_path": "/gIh8GMJI0uzwP3CrMDRc1X21Xw7.jpg",
      "original_language": "en",
      "original_title": "The Hobbit: An Unexpected Journey",
      "genre_ids": [
          28,
          12,
          14
      ],
      "title": "The Hobbit: An Unexpected Journey",
      "vote_average": 7.3,
      "overview": "Bilbo Baggins, a hobbit enjoying his quiet life, is swept into an epic quest by Gandalf the Grey and thirteen dwarves who seek to reclaim their mountain home from Smaug, the dragon.",
      "release_date": "2012-11-26"
  },
  {
      "popularity": 44.631,
      "vote_count": 12250,
      "video": false,
      "poster_path": "/lLZxUpNnLHklJ7IA75CbjfE0xra.jpg",
      "id": 205596,
      "adult": false,
      "backdrop_path": "/caQp2MhwfrTYGqVr7d9ayn8tqQ7.jpg",
      "original_language": "en",
      "original_title": "The Imitation Game",
      "genre_ids": [
          18,
          36,
          53,
          10752
      ],
      "title": "The Imitation Game",
      "vote_average": 8.1,
      "overview": "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II.",
      "release_date": "2014-11-14"
  },
  {
      "popularity": 44.613,
      "vote_count": 2936,
      "video": false,
      "poster_path": "/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg",
      "id": 359724,
      "adult": false,
      "backdrop_path": "/n3UanIvmnBlH531pykuzNs4LbH6.jpg",
      "original_language": "en",
      "original_title": "Ford v Ferrari",
      "genre_ids": [
          28,
          18
      ],
      "title": "Ford v Ferrari",
      "vote_average": 7.9,
      "overview": "American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.",
      "release_date": "2019-11-13"
  }
]
