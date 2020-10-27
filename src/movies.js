const MOVIES_PER_PAGE = 8;

export const filterMoviesByGenreId = (movies, genreId) => {
  return genreId === `all` ? movies : movies.filter((movie) => movie.genreId === genreId);
};

export const paginateMovies = (movies, currentItem) => {
  let lastItemId = currentItem + MOVIES_PER_PAGE;
  let slicedMovies = movies.slice(0, lastItemId);
  let hasNext = movies.length > slicedMovies.length;

  return {
    items: slicedMovies,
    pagination: {lastItemId, hasNext},
  };
};

export const buildMovie = (movieData) => {
  return {
    id: movieData.id,
    name: movieData.name,
    posterImage: movieData.poster_image,
    previewImage: movieData.preview_image,
    backgroundImage: movieData.background_image,
    backgroundColor: movieData.background_color,
    videoLink: movieData.video_link,
    previewVideoLink: movieData.preview_video_link,
    description: movieData.description,
    rating: movieData.rating,
    scoresCount: movieData.scores_count,
    director: movieData.director,
    starring: movieData.starring,
    runTime: movieData.run_time,
    genre: movieData.genre,
    released: movieData.released,
    isFavorite: movieData.is_favorite
  };
};
