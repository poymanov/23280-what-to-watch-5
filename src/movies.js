const MOVIES_PER_PAGE = 8;

export const filterMoviesByGenreId = (movies, genreId) => {
  return genreId === 0 ? movies : movies.filter((movie) => movie.genreId === genreId);
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
