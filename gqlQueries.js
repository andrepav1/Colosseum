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
query($id: String!) {
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
query($id: String!) {
  movieInfo(id: $id) {
    id,
    title,
    overview,
    poster_path,
  }
}
`;

const SEARCH_MOVIE = gql`
query($name: String!) {
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
query($id: String!) {
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
query($id: String!) {
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
query($id: String!) {
  movieImages(id: $id) {
    posters {
      file_path
    }
  }
}
`;
const MOVIE_BACKDROP_IMAGES = gql`
query($id: String!) {
  movieImages(id: $id) {
    backdrops {
      file_path
    }
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
};