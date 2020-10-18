export const filterMoviesByGenreId = (movies, genreId) => {
  if (genreId === 0) {
    return movies;
  }
  return movies.filter((movie) => movie.genreId === genreId);
};
