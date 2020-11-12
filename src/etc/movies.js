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

export const buildMovies = (moviesData) => {
  const movies = [];

  moviesData.forEach((item) => {
    movies.push(buildMovie(item));
  });

  return movies;
};

export const buildReviews = (reviewsData) => {
  const reviews = [];

  reviewsData.forEach((item) => {
    reviews.push(buildReview(item));
  });

  return reviews;
};

export const buildReview = (reviewData) => {
  return {
    id: reviewData.id,
    comment: reviewData.comment,
    date: reviewData.date,
    rating: reviewData.rating,
    user: {
      id: reviewData.user.id,
      name: reviewData.user.name,
    }
  };
};

export const buildRelatedMovies = (currentMovie, movies) => {
  if (!currentMovie || !movies) {
    return [];
  }

  movies = movies.filter((movie) => {
    return movie.genre === currentMovie.genre && movie.id !== currentMovie.id;
  });

  return buildMovies(movies.slice(0, 4));
};
