import gql from 'graphql-tag';

const MOVIE_POPULAR = gql`
query( $params: BasicMovieParams ) {
  moviePopular( params: $params ) {
    id,
    title,
    overview,
    poster_path,
    backdrop_path,
    genre_ids
  }
}
`;

const MOVIE_TOP_RATED = gql`
query( $params: BasicMovieParams ) {
  movieTopRated( params: $params ) {
    id,
    title,
    overview,
    poster_path,
    backdrop_path,
    genre_ids
  }
}
`;

const MOVIE_NOW_PLAYING = gql`
query( $params: BasicMovieParams ) {
  movieNowPlaying( params: $params ) {
    id,
    title,
    overview,
    poster_path,
    backdrop_path,
    genre_ids
  }
}
`;

const MOVIE_RECOMMENDATIONS = gql`
query($id: ID!) {
  movieRecommendations(id: $id) {
    id,
    title,
    overview,
    poster_path,
    backdrop_path,
    genre_ids
  }
}
`;

const DISCOVER_MOVIE = gql`
query($params: DiscoverMoviesParameters!) {
  discoverMovie(params: $params) {
    page,
    total_pages,
    total_results,
    results {
      id,
      media_type,
      title,
      overview,
      poster_path,
      backdrop_path,
      genre_ids
    }
  }
}
`;

const DISCOVER_TV = gql`
query($params: DiscoverTvParameters!) {
  discoverTv(params: $params) {
    page,
    total_pages,
    total_results,
    results {
      id,
      name,
      media_type,
      overview,
      poster_path,
      backdrop_path,
      genre_ids
    }
  }
}
`;

const MOVIE_INFO = gql`
query($id: ID!) {
  movieInfo(id: $id) {
    id,
    title,
    overview,
    poster_path,
    release_date,
    tagline,
    genres {
      id,
      name
    },
    production_companies {
      name
    },
    production_countries {
      name
    }
    spoken_languages {
      name
    },
    original_language,
    original_title,
    popularity,
    vote_average,
    vote_count,
    runtime
  }
}
`;

const SEARCH_MOVIE = gql`
query($params: SearchParameters!) {
  searchMovie(params: $params) {
    page,
    total_pages,
    total_results,
    results {
      id,
      title,
      media_type,
      overview,
      poster_path,
      backdrop_path,
      genre_ids
    }
  }
}
`;

const SEARCH_MULTI = gql`
query($params: SearchParameters!) {
  searchMulti(params: $params) {
    page,
    total_pages,
    total_results,
    results {
      ...on MovieBasic {
        media_type,
        id,
        title,
        poster_path,
      }
      ...on TVShowBasic {
        media_type,
        id,
        name,
        poster_path,
      }
      ...on PersonDetail {
        media_type,
        id,
        name,
        profile_path,
      }
    }
  }
}
`;

const MOVIE_VIDEOS = gql`
query($id: ID!) {
  movieVideos(id: $id) {
    id,
    key,
    name,
    site,
    type
  }
}
`;

const MOVIE_IMAGES = gql`
query($id: ID!) {
  movieImages(id: $id) {
    backdrops {
      file_path
    }
    posters {
      file_path
    }
  }
}
`;

const MOVIE_POSTER_IMAGES = gql`
query($id: ID!) {
  movieImages(id: $id) {
    posters {
      file_path
    }
  }
}
`;

const MOVIE_BACKDROP_IMAGES = gql`
query($id: ID!) {
  movieImages(id: $id) {
    backdrops {
      file_path
    }
  }
}
`;

const MOVIE_SIMILAR = gql`
query($id: ID!) {
  movieSimilar(id: $id) {
    id,
    title,
    poster_path,
  }
}
`;

const MOVIE_KEYWORDS = gql`
query($id: ID!) {
  movieKeywords(id: $id) {
    id,
    name,
  }
}
`;

const MOVIE_CREDITS = gql`
query($id: ID!) {
  movieCredits(id: $id) {
    cast {
      id,
      name
    }
    crew {
      id,
      name
    }
  }
}
`;

const MOVIE_CAST = gql`
query($id: ID!) {
  movieCredits(id: $id) {
    cast {
      id,
      name, 
      character,
      profile_path
    }
  }
}
`;

const PERSON_INFO = gql`
query($id: ID!) {
  personInfo(id: $id) {
    id,
    name, 
    biography,
    profile_path,
    place_of_birth,
    birthday,
    deathday,
    also_known_as,
    
  }
}
`;

const PERSON_MOVIE_CREDITS = gql`
query($id: ID!) {
  personMovieCredits(id: $id) {
    cast {
      id,
      title,
      overview,
      character,
      poster_path,
      release_date,
    }
    crew {
      id,
      title,
      overview,
      job,
      poster_path,
      release_date,
    }
  }
}
`;

const PERSON_IMAGES = gql`
query($id: ID!) {
  personImages(id: $id) {
    file_path,
  }
}
`;

const TV_INFO = gql`
query($tv_id: ID!) {
  tvInfo(tv_id: $tv_id) {
    id,
    name,
    overview,
    poster_path,
    first_air_date,
    last_air_date,
    created_by {
      name,
      id
    }
    in_production,
    genres {
      id,
      name
    },
    production_companies {
      name
    },
    networks {
      name
    }
    seasons {
      name,
      season_number,
      episode_count
    }
    languages,
    original_language,
    original_name,
    origin_country,
    popularity,
    vote_average,
    vote_count,
    number_of_episodes,
    number_of_seasons
  }
}
`;

const TV_VIDEOS = gql`
query($tv_id: ID!) {
  tvVideos(tv_id: $tv_id) {
    id,
    key,
    name,
    site,
    type
  }
}
`;

const TV_SIMILAR = gql`
query($tv_id: ID!) {
  tvSimilar(tv_id: $tv_id) {
    id,
    name,
    poster_path,
  }
}
`;

const TV_BACKDROP_IMAGES = gql`
query($tv_id: ID!) {
  tvImages(tv_id: $tv_id) {
    backdrops {
      file_path
    }
  }
}
`;

const TV_KEYWORDS = gql`
query($tv_id: ID!) {
  tvKeywords(tv_id: $tv_id) {
    id,
    name,
  }
}
`;

const TV_CREDITS = gql`
query($tv_id: ID!) {
  tvCredits(tv_id: $tv_id) {
    cast {
      id,
      name
    }
    crew {
      id,
      name
    }
  }
}
`;

const TV_CAST = gql`
query($tv_id: ID!) {
  tvCredits(tv_id: $tv_id) {
    cast {
      id,
      name, 
      character,
      profile_path
    }
  }
}
`;

const SEASON_INFO = gql`
query($tv_id: ID!, $season_number: Int!) {
  seasonInfo(tv_id: $tv_id, season_number: $season_number) {
    name,
    overview,
    episodes {
      episode_number,
      name,
      overview,
      air_date
    }, 
    air_date,
    poster_path
  }
}
`;

const AUTOCOMPLETE_MULTI_SEARCH = gql`
query($query: String) {
  autocompleteMultiSearch(query: $query) {
    id,
    media_type,
    name
  }
}
`;

export {
  MOVIE_POPULAR,
  MOVIE_TOP_RATED,
  MOVIE_NOW_PLAYING,
  MOVIE_RECOMMENDATIONS,
  DISCOVER_MOVIE,
  DISCOVER_TV,
  MOVIE_INFO,
  SEARCH_MOVIE,
  SEARCH_MULTI,
  MOVIE_VIDEOS,
  MOVIE_IMAGES,
  MOVIE_POSTER_IMAGES,
  MOVIE_BACKDROP_IMAGES,
  MOVIE_SIMILAR,
  MOVIE_KEYWORDS,
  MOVIE_CREDITS,
  MOVIE_CAST,
  PERSON_INFO,
  PERSON_MOVIE_CREDITS,
  PERSON_IMAGES,
  TV_INFO,
  TV_VIDEOS,
  TV_SIMILAR,
  TV_BACKDROP_IMAGES,
  TV_KEYWORDS,
  TV_CREDITS,
  TV_CAST,
  SEASON_INFO,
  AUTOCOMPLETE_MULTI_SEARCH,

}
