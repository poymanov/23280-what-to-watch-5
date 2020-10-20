const MOVIES_PER_PAGE = 8;

export const filterMoviesByGenreId = (movies, genreId, currentItem) => {
  let filteredMovies = genreId === 0 ? movies : movies.filter((movie) => movie.genreId === genreId);
  let lastItemId = currentItem + MOVIES_PER_PAGE;

  let slicedFilteredMovies = filteredMovies.slice(0, lastItemId);
  let hasNext = filteredMovies.length > slicedFilteredMovies.length;

  return {
    items: slicedFilteredMovies,
    pagination: {lastItemId, hasNext},
  };
};
