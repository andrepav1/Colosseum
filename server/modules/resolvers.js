const { MovieDb } = require('moviedb-promise')
const moviedb = new MovieDb('c781a3dabef946805a961db3b7b916eb')

const resolvers = {
  SearchMultiResult: {
    __resolveType({media_type}){
      switch (media_type) {
        case 'movie': return 'MovieBasic'
        case 'tv': return 'TVShowBasic'
        case 'person': return 'PersonDetail'
      }
      return null;
    },
  },
  TrendingResult: {
    __resolveType({media_type}){
      switch (media_type) {
        case 'movie': return 'MovieBasic'
        case 'tv': return 'TVShowBasic'
      }
      return null;
    },
  },
  Query: {
    trending: async (_,{media_type, time_window}) => {
      let response = await moviedb.trending({ media_type, time_window }).catch(console.error)
      return response;
    },
    searchMovie: async (_,{params}) => {
      console.log("searchMovie", params);
      let response = await moviedb.searchMovie(params).catch(console.error)
      return response;
    },
    searchTv: async (_,{params}) => {
      console.log("searchTv", params);
      let response = await moviedb.searchTv(params).catch(console.error)
      return response;
    },
    searchPerson: async (_,{params}) => {
      console.log("searchPerson", params);
      let response = await moviedb.searchPerson(params).catch(console.error)
      return response;
    },
    searchMulti: async (_,{params}) => {
      console.log("searchMulti", params);
      let response = await moviedb.searchMulti(params).catch(console.error)
      return response;
    },
    movieInfo: async (_,{id}) => {
      let movie = await moviedb.movieInfo({ id: id }).catch(console.error)
      return movie;
    }, 
    moviePopular: async (_,{params}) => {
      console.log("moviePopular", params);
      let { results } = await moviedb.moviePopular(params).catch(console.error)
      return results;
    }, 
    movieTopRated: async (_,{params}) => {
      console.log("movieTopRated", params);
      let { results } = await moviedb.movieTopRated(params).catch(console.error)
      return results;
    }, 
    movieNowPlaying: async (_,{params}) => {
      console.log("movieNowPlaying", params);
      let { results } = await moviedb.movieNowPlaying(params).catch(console.error)
      return results;
    }, 
    movieRecommendations: async (_,{id}) => {
      let { results } = await moviedb.movieRecommendations({ id: id }).catch(console.error)
      return results;
    }, 
    movieVideos: async (_,{id}) => {
      let { results } = await moviedb.movieVideos({ id: id }).catch(console.error)
      return results;
    }, 
    discoverMovie: async (_,{params}) => {
      console.log("discoverMovie", params);
      let response = await moviedb.discoverMovie(params).catch(console.error)
      return response;
    },
    discoverTv: async (_,{params}) => {
      console.log("discoverTv", params);
      let response = await moviedb.discoverTv(params).catch(console.error)
      return response;
    },
    movieImages: async (_,{id}) => {
      let { backdrops, posters } = await moviedb.movieImages({ id: id }).catch(console.error)
      return { backdrops, posters };
    },
    movieSimilar: async (_,{params}) => {
      console.log("movieSimilar", params);
      let response = await moviedb.movieSimilar(params).catch(console.error)
      return response;
    },
    movieKeywords: async (_,{id}) => {
      let { keywords } = await moviedb.movieKeywords({ id: id }).catch(console.error)
      return keywords;
    },
    movieCredits: async (_,{id}) => {
      let { crew, cast } = await moviedb.movieCredits({ id: id }).catch(console.error)
      return { crew, cast };
    },
    personInfo: async (_,{id}) => {
      let person = await moviedb.personInfo({ id: id }).catch(console.error)
      return person;
    },
    personMovieCredits: async (_,{id}) => {
      let { crew, cast } = await moviedb.personMovieCredits({ id: id }).catch(console.error)      
      return { crew, cast };
    },
    personImages: async (_,{id}) => {
      let { profiles } = await moviedb.personImages({ id: id }).catch(console.error)      
      return profiles;
    },
    tvInfo: async (_,{tv_id}) => {
      let tv_show = await moviedb.tvInfo({ id: tv_id }).catch(console.error)
      return tv_show;
    }, 
    tvImages: async (_,{tv_id}) => {
      let { backdrops, posters } = await moviedb.tvImages({ id: tv_id }).catch(console.error)
      return { backdrops, posters };
    },
    tvKeywords: async (_,{tv_id}) => {
      let { results } = await moviedb.tvKeywords({ id: tv_id }).catch(console.error)
      return results;
    },
    tvRecommendations: async (_,{tv_id}) => {
      let { results } = await moviedb.tvRecommendations({ id: tv_id }).catch(console.error)
      return results;
    }, 
    tvSimilar: async (_,{params}) => {
      console.log("tvSimilar", params);
      let response = await moviedb.tvSimilar(params).catch(console.error)
      return response;
    },
    tvVideos: async (_,{tv_id}) => {
      let { results } = await moviedb.tvVideos({ id: tv_id }).catch(console.error)
      return results;
    }, 
    tvPopular: async (_,{params}) => {
      let { results } = await moviedb.tvPopular(params).catch(console.error)
      return results;
    }, 
    tvTopRated: async (_,{params}) => {
      let { results } = await moviedb.tvTopRated(params).catch(console.error)
      return results;
    }, 
    tvOnTheAir: async (_,{params}) => {
      let { results } = await moviedb.tvOnTheAir(params).catch(console.error)
      return results;
    }, 
    episodeInfo: async (_,{tv_id, season_number, episode_number}) => {
      let tv = await moviedb.episodeInfo({ id: tv_id, season_number: season_number, episode_number: episode_number }).catch(console.error)
      return tv;
    }, 
    seasonInfo: async (_,{tv_id, season_number}) => {
      let tv = await moviedb.seasonInfo({ id: tv_id, season_number: season_number }).catch(console.error)
      return tv;
    }, 
    tvCredits: async (_,{tv_id}) => {
      let { crew, cast } = await moviedb.tvCredits({ id: tv_id }).catch(console.error)
      return { crew, cast };
    },
    personTvCredits: async (_,{id}) => {
      let { crew, cast } = await moviedb.personTvCredits({ id: id }).catch(console.error)
      return { crew, cast };
    },
  }
};
// ALL AVAILABLE METHODS:
// tvAccountStates
// tvAlternativeTitles
// tvChanges
// tvContentRatings
// episodeGroups
// tvExternalIds
// tvReviews
// tvScreenedTheatrically
// tvTranslations
// tvRatingUpdate
// tvRatingDelete
// tvLatest
// tvAiringToday
// configuration
// countries
// jobs
// languages
// primaryTranslations
// find
// searchList
// collectionInfo
// collectionImages
// collectionTranslations
// trending
// movieAccountStates
// movieAlternativeTitles
// movieChanges
// movieCredits
// movieExternalIds
// movieKeywords
// movieReleaseDates
// movieTranslations
// movieSimilar
// movieReviews
// movieLists
// movieRatingUpdate
// movieRatingDelete
// upcomingMovies
// seasonInfo
// seasonChanges
// seasonAccountStates
// seasonCredits
// seasonExternalIds
// seasonImages
// seasonVideos
// episodeInfo
// episodeChanges
// episodeAccountStates
// episodeCredits
// episodeExternalIds
// episodeImages
// episodeTranslations
// episodeRatingUpdate
// episodeRatingDelete
// episodeVideos
// personChanges
// personMovieCredits
// personTvCredits
// personCombinedCredits
// personExternalIds
// personTaggedImages
// personTranslations
// personLatest
// personPopular
// creditInfo
// listInfo
// listStatus
// createList
// createListItem
// removeListItem
// clearList
// deleteList
// genreMovieList
// genreTvList
// keywordInfo
// keywordMovies
// companyInfo
// companyAlternativeNames
// companyImages
// accountInfo
// accountLists
// accountFavoriteMovies
// accountFavoriteTv
// accountFavoriteUpdate
// accountRatedMovies
// accountRatedTv
// accountRatedTvEpisodes
// accountMovieWatchlist
// accountTvWatchlist
// accountWatchlistUpdate
// changedMovies
// changedTvs
// changedPeople
// movieCertifications
// tvCertifications
// networkInfo
// networkAlternativeNames
// networkImages
// review
// episodeGroup

module.exports = resolvers;
