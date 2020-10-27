export const getByMovies = (movies) => {
  const allGenres = [];
  const genres = [{id: `all`, title: `All genres`}];

  movies.forEach((item) => {
    allGenres.push(item.genre);
  });

  const uniqGenres = [...new Set(allGenres)];
  uniqGenres.sort();

  uniqGenres.forEach((item) => {
    genres.push({
      id: item.toLowerCase(),
      title: item
    });
  });

  return genres;
};
