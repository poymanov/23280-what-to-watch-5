import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../action";
import {moviesData} from "./movies-data";
import {APIRoute, AppRoute} from "../../../constants/const";
import {extend} from "../../../utils/utils";
import {
  fetchMoviesList, fetchPromoMovie, fetchCurrentMovie,
  fetchMovieReviews, fetchUserFavorites, addReview, addMovieToFavorite
} from "../../api-actions";

const api = createAPI(() => {});

const rawMovie1 = {
  "id": 1,
  "name": `test`,
  "poster_image": `test`,
  "preview_image": `test`,
  "background_image": `test`,
  "background_color": `test`,
  "video_link": `test`,
  "preview_video_link": `test`,
  "description": `test`,
  "rating": 1,
  "scores_count": 1,
  "director": `test`,
  "starring": [`test`],
  "run_time": 1,
  "genre": `test`,
  "released": 1,
  "is_favorite": false,
};

const rawMovie2 = extend(rawMovie1, {id: 2, genre: `test2`});
const rawMovie3 = extend(rawMovie1, {id: 3, genre: `test2`});

const rawMovies = [rawMovie1, rawMovie2, rawMovie3];

const movie1 = {
  id: 1,
  name: `test`,
  posterImage: `test`,
  previewImage: `test`,
  backgroundImage: `test`,
  backgroundColor: `test`,
  videoLink: `test`,
  previewVideoLink: `test`,
  description: `test`,
  rating: 1,
  scoresCount: 1,
  director: `test`,
  starring: [`test`],
  runTime: 1,
  genre: `test`,
  released: 1,
  isFavorite: false,
};

const movie2 = extend(movie1, {id: 2, genre: `test2`});
const movie3 = extend(movie1, {id: 3, genre: `test2`});

const movies = [movie1, movie2, movie3];

const reviews = [{
  id: 1,
  comment: `test`,
  date: `2020-12-12 12:12:12`,
  rating: 3,
  user: {
    id: 1,
    name: `test`,
  }
}];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(moviesData(void 0, {})).toEqual({
    promo: null,
    list: [],
    filterGenreId: `All`,
    currentMovie: null,
    currentMovieReviews: [],
    currentMovieRelated: [],
    currentPlayerMovie: null,
    userFavorites: [],
    reviewFormError: null,
  });
});

it(`Reducer should update promo movie`, () => {
  expect(moviesData({}, {
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: rawMovie1
  })).toEqual({
    promo: movie1,
  });
});

it(`Reducer should update current movie`, () => {
  expect(moviesData({}, {
    type: ActionType.LOAD_CURRENT_MOVIE,
    payload: rawMovie1
  })).toEqual({
    currentMovie: movie1,
  });
});

it(`Reducer should update current player movie`, () => {
  expect(moviesData({}, {
    type: ActionType.LOAD_CURRENT_PLAYER_MOVIE,
    payload: rawMovie1
  })).toEqual({
    currentPlayerMovie: movie1,
  });
});

it(`Reducer should flush current movie`, () => {
  expect(moviesData({}, {
    type: ActionType.FLUSH_CURRENT_MOVIE,
  })).toEqual({
    currentMovie: null,
    currentMovieReviews: [],
    currentMovieRelated: [],
  });
});

it(`Reducer should flush review form error`, () => {
  expect(moviesData({reviewFormError: `error`}, {
    type: ActionType.FLUSH_REVIEW_FORM_ERROR,
  })).toEqual({
    reviewFormError: null,
  });
});

it(`Reducer should update movies`, () => {
  expect(moviesData({}, {
    type: ActionType.LOAD_MOVIES,
    payload: rawMovies
  })).toEqual({
    list: movies,
  });
});

it(`Reducer should update user favorites`, () => {
  expect(moviesData({}, {
    type: ActionType.LOAD_USER_FAVORITES,
    payload: rawMovies
  })).toEqual({
    userFavorites: movies,
  });
});

it(`Reducer should update movie reviews`, () => {
  expect(moviesData({}, {
    type: ActionType.LOAD_MOVIE_REVIEWS,
    payload: reviews
  })).toEqual({
    currentMovieReviews: reviews,
  });
});

it(`Reducer should update current movie related`, () => {
  expect(moviesData({currentMovie: movie2}, {
    type: ActionType.LOAD_MOVIE_RELATED,
    payload: rawMovies
  })).toEqual({
    currentMovie: movie2,
    currentMovieRelated: [movie3],
  });
});

it(`Reducer should update review form error to user data`, () => {
  expect(moviesData({}, {
    type: ActionType.LOAD_REVIEW_FORM_ERROR,
    payload: `error`
  })).toEqual({
    reviewFormError: `error`,
  });
});

it(`Reducer should filter movies by genre`, () => {
  expect(moviesData({list: movies}, {
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: `test2`
  })).toEqual({
    filterGenreId: `test2`,
    list: movies,
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to load movies`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = fetchMoviesList();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, [{fake: true}]);

    return moviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: [{"fake": true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_GENRES,
          payload: [{"fake": true}],
        });
      });
  });

  it(`Should make a correct API call to load promo movie`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoMovieLoader = fetchPromoMovie();

    apiMock
      .onGet(APIRoute.FILMS_PROMO)
      .reply(200, [{fake: true}]);

    return promoMovieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_MOVIE,
          payload: [{"fake": true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_CURRENT_PLAYER_MOVIE,
          payload: [{"fake": true}],
        });
      });
  });

  it(`Should make a correct API call to load current movie`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const currentMovieLoader = fetchCurrentMovie(1);

    apiMock
      .onGet(APIRoute.FILMS + `/1`)
      .reply(200, [{fake: true}]);

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, [{fake: true}]);

    return currentMovieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_CURRENT_MOVIE,
          payload: [{"fake": true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_CURRENT_PLAYER_MOVIE,
          payload: [{"fake": true}],
        });
      });
  });

  it(`Should make a correct API call to load movie reviews`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieReviewsLoader = fetchMovieReviews(1);

    apiMock
      .onGet(APIRoute.MOVIE_REVIEWS + `/1`)
      .reply(200, [{fake: true}]);

    return movieReviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIE_REVIEWS,
          payload: [{"fake": true}],
        });
      });
  });

  it(`Should make a correct API call to add review`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieReviewsLoader = addReview({id: 1, rating: 1, comment: `test`});

    apiMock
      .onPost(APIRoute.MOVIE_REVIEWS + `/1`)
      .reply(200);

    return movieReviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.FILMS + `/1`,
        });
      });
  });

  it(`Should make a correct API call to add movie to favourite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieFavoriteLoader = addMovieToFavorite(1);

    apiMock
      .onPost(APIRoute.FAVORITE + `/1/1`)
      .reply(200);

    return movieFavoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.FILMS + `/1`,
        });
      });
  });

  it(`Should make a correct API call to load user favorites`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const userFavoritesLoader = fetchUserFavorites();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, [{fake: true}]);

    return userFavoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_USER_FAVORITES,
          payload: [{"fake": true}],
        });
      });
  });
});
