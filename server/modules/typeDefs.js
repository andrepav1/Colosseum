const { gql } = require('apollo-server-express');

const movieTypeDefs = gql`
type Query{
  trending(media_type: String!, time_window: String!): TrendingResponse
  searchMovie( params: SearchParameters!): SearchMovieResponse
  searchTv( params: SearchParameters!): SearchTvResponse
  searchPerson( params: SearchParameters!): SearchPersonResponse
  searchMulti( params: SearchParameters!): SearchMultiResponse
  movieInfo( id: ID! ): MovieDetail
  moviePopular( params: BasicMovieParams ): [MovieBasic]
  movieTopRated( params: BasicMovieParams ): [MovieBasic]
  movieNowPlaying( params: BasicMovieParams ): [MovieBasic]
  movieRecommendations( id: ID! ): [MovieBasic]
  movieVideos( id: ID! ): [VideoBlurb]
  discoverMovie(params: DiscoverMoviesParameters! ): SearchMovieResponse
  discoverTv(params: DiscoverTvParameters! ): SearchTvResponse
  movieImages(id: ID!): ImagesResponse
  movieSimilar(params: MovieSimilarParameters!): SearchMovieResponse
  movieKeywords(id: ID!): [Keyword]
  movieCredits(id: ID!): CreditsResponse
  personInfo(id: ID!): PersonDetail
  personMovieCredits(id: ID!): PersonMovieCreditsResponse
  personImages(id: ID!): [Image]
  tvInfo(tv_id: ID!): TVShowDetail
  tvImages(tv_id: ID!): ImagesResponse
  tvKeywords(tv_id: ID!): [Keyword]
  tvRecommendations(tv_id: ID!): [TVShowBasic]
  tvSimilar(params: TvSimilarParameters!): SearchTvResponse
  tvVideos(tv_id: ID! ): [VideoBlurb]
  tvPopular( params: BasicTvShowParams ): [TVShowBasic]
  tvTopRated( params: BasicTvShowParams ): [TVShowBasic]
  tvOnTheAir( params: BasicTvShowParams ): [TVShowBasic]
  episodeInfo(tv_id: ID!, season_number: Int!, episode_number: Int! ): EpisodeDetail
  seasonInfo(tv_id: ID!, season_number: Int! ): SeasonDetail
  tvCredits(tv_id: ID!): CreditsResponse
  personTvCredits(id: ID!): PersonTVShowCreditsResponse
}
union TrendingResult = MovieBasic | TVShowBasic
type TrendingResponse {
  page: Int
  results: [TrendingResult]
  total_pages: Int
  total_results: Int
}
type MovieBasic {
  id: ID
  adult: Boolean
  backdrop_path : String
  original_language : String
  original_title : String
  overview : String
  popularity : Float
  poster_path : String
  release_date : String
  title : String
  video : Boolean
  vote_average : Float
  vote_count : Int
  genre_ids : [Int!]
}
type MovieDetail {
  adult: Boolean
  backdrop_path : String
  belongs_to_collection : CollectionName
  budget : Float
  genres : [Genre]
  homepage : String
  id: ID
  imdb_id : String
  original_language : String
  original_title : String
  overview : String
  popularity : Float
  poster_path : String
  production_companies : [ProductionCompany]
  production_countries : [ProductionCountry]
  release_date : String
  revenue : Float
  runtime : Int
  spoken_languages : [SpokenLanguage]
  status : String
  tagline : String
  title : String
  video : Boolean
  vote_average : Float
  vote_count : Int
}
input BasicMovieParams {
  language: String,
  page: Int,
  region: String
}
input BasicTvShowParams {
  language: String,
  page: Int
}
input DiscoverMoviesParameters {
  language: String
  region: String
  sort_by: String
  page: Int
  with_genres: String
  without_genres: String
  with_people: String
  with_keywords: String
  without_keywords: String
  with_original_language: String
  year: Int
}
input DiscoverTvParameters {
  language: String
  region: String
  sort_by: String
  page: Int
  with_genres: String
  without_genres: String
  with_keywords: String
  without_keywords: String
  with_original_language: String
}
input SearchParameters {
  language: String
  region: String
  page: Int
  query: String
  year: Int
}
input MovieSimilarParameters {
  id: ID!
  page: Int
}
input TvSimilarParameters {
  id: ID!
  page: Int
}
type SearchMovieResponse {
  page: Int
  results: [MovieBasic]
  total_results: Int
  total_pages: Int
}
type SearchTvResponse {
  page: Int
  results: [TVShowBasic]
  total_results: Int
  total_pages: Int
}
type SearchPersonResponse {
  page: Int
  results: [PersonDetail]
  total_results: Int
  total_pages: Int
}
extend type MovieBasic {
  media_type: String
}
extend type TVShowBasic {
  media_type: String
}
extend type PersonDetail {
  media_type: String
}
union SearchMultiResult = MovieBasic | TVShowBasic | PersonDetail
type SearchMultiResponse {
  page: Int
  results: [SearchMultiResult]
  total_results: Int
  total_pages: Int
}
type VideoBlurb{
  id : ID
  iso_639_1 : String
  iso_3166_1 : String
  key : String
  name : String
  site : String
  size : Int
  type : String
}
type SpokenLanguage{
  iso_639_1 : String
  name : String
}
type ProductionCompany{
  name : String
  id : ID
}
type Network {
  name: String
  id: ID
  logo_path: String
  origin_country: String
}
type ProductionCountry{
  iso_3166_1 : String
  name : String
}
type CollectionName{
  id : ID
  name : String
  poster_path : String
  backdrop_path : String
}
type ImagesResponse {
  backdrops: [Image]
  posters: [Image]
}
type Image {
  aspect_ratio: Float
  file_path: String
  height: Int
  iso_639_1: String
  vote_average: Float
  vote_count: Int
  width: Int
}
type Genre{
  id : ID
  name : String
}
type Keyword{
  id : ID
  name : String
}
type CreditsResponse{
  cast: [Cast]
  crew: [Crew]
}
type Cast{
  cast_id: Int
  character: String
  credit_id: String
  gender: Int
  id: ID
  name: String
  order: Int
  profile_path: String
}
type Crew{
  credit_id: Int
  department: String
  gender: String
  job: Int
  id: ID
  name: String
  profile_path: String
}
type TVShowCreator{
  id: ID
  credit_id: Int
  gender: String
  name: String
  profile_path: String
}
type PersonDetail{
  id: ID
  birthday: String
  deathday: String
  known_for_department: String
  also_known_as: [String]
  gender: Int
  biography: String
  popularity: Float
  place_of_birth: String
  name: String
  profile_path: String
  adult: Boolean
  homepage: String
  imdb_id: String
}
type PersonMovieCreditsResponse{
  cast: [PersonMovieCastDetail]
  crew: [PersonMovieCrewDetail]
}
type PersonTVShowCreditsResponse{
  cast: [PersonTVShowCastDetail]
  crew: [PersonTVShowCrewDetail]
}
type PersonTVShowCastDetail{
  character: String
  credit_id: String
  id: ID
  adult: Boolean
  backdrop_path : String
  original_language : String
  original_name : String
  origin_country : [String]
  overview : String
  popularity : Float
  poster_path : String
  first_air_date : String
  name : String
  video : Boolean
  episode_count : Int 
  vote_average : Float
  vote_count : Int
  genre_ids : [Int]
}
type PersonTVShowCrewDetail{
  id: ID
  department: String
  credit_id: String
  job: String
  adult: Boolean
  episode_count : Int 
  backdrop_path : String
  original_language : String
  original_name : String
  origin_country : [String]
  overview : String
  popularity : Float
  poster_path : String
  first_air_date : String
  name : String
  video : Boolean
  vote_average : Float
  vote_count : Int
  genre_ids : [Int]
}
type PersonMovieCastDetail{
  character: String
  credit_id: String
  id: ID
  adult: Boolean
  backdrop_path : String
  original_language : String
  original_title : String
  overview : String
  popularity : Float
  poster_path : String
  release_date : String
  title : String
  video : Boolean
  vote_average : Float
  vote_count : Int
  genre_ids : [Int]
}
type PersonMovieCrewDetail{
  id: ID
  department: String
  credit_id: String
  job: String
  adult: Boolean
  backdrop_path : String
  original_language : String
  original_title : String
  overview : String
  popularity : Float
  poster_path : String
  release_date : String
  title : String
  video : Boolean
  vote_average : Float
  vote_count : Int
  genre_ids : [Int]
}
type TVShowBasic{
  poster_path: String
  popularity: Float
  id: ID
  backdrop_path: String
  vote_average: Float
  vote_count: Int
  name: String
  original_name: String
  overview: String
  first_air_date: String
  origin_country: [String]
  genre_ids: [Int]
  original_language: String
}
type TVShowDetail {
  backdrop_path: String
  created_by: TVShowCreator
  genres : [Genre]
  first_air_date: String
  episode_run_time: [Int]
  id: ID
  in_production: Boolean
  languages: [String]
  last_air_date: String
  name: String
  number_of_episodes: Int
  number_of_seasons: Int
  origin_country: [String]
  original_language: String
  original_name: String
  overview: String
  popularity: Float
  poster_path: String
  production_companies : [ProductionCompany]
  networks: [Network]
  seasons: [SeasonBasic]
  status: String
  type: String
  vote_average: Float
  vote_count: Int
}
type SeasonBasic {
  air_date: String
  episode_count: Int
  id: ID
  name: String
  overview: String
  poster_path: String
  season_number: Int
}
type SeasonDetail {
  id: ID
  air_date: String
  episodes: [EpisodeDetail]
  name: String
  overview: String
  poster_path: String
  season_number: Int
}
type EpisodeDetail {
  air_date: String
  crew: [Crew]
  guest_stars: [Cast]
  episode_number: Int
  name: String
  overview: String
  id: ID
  production_code: String
  season_number: Int
  still_path: String
  vote_average: Float
  vote_count: Int
}
`

module.exports = movieTypeDefs