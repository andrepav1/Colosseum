import gql from 'graphql-tag';

const MOVIE_POPULAR = gql`
query {
  moviePopular {
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
query {
  movieTopRated {
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
query {
  movieNowPlaying {
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
query {
  discoverMovie {
    id,
    title,
    overview,
    poster_path,
    backdrop_path,
    genre_ids
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
query($name: ID!) {
  searchMovie(name: $name) {
    id,
    title,
    overview,
    poster_path,
    genre_ids
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
  }
}
`;

export {
  MOVIE_POPULAR,
  MOVIE_TOP_RATED,
  MOVIE_NOW_PLAYING,
  MOVIE_RECOMMENDATIONS,
  DISCOVER_MOVIE,
  MOVIE_INFO,
  SEARCH_MOVIE,
  MOVIE_VIDEOS,
  MOVIE_IMAGES,
  MOVIE_POSTER_IMAGES,
  MOVIE_BACKDROP_IMAGES,
  MOVIE_SIMILAR,
  MOVIE_KEYWORDS,
  MOVIE_CREDITS,
  MOVIE_CAST,
  PERSON_INFO
};