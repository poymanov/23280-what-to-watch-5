import {genresData} from "./genres-data";
import {ActionType} from "../../action";

const movies = [{
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
}];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(genresData(void 0, {})).toEqual({
    genres: []
  });
});

it(`Reducer should update genres`, () => {
  expect(genresData({}, {
    type: ActionType.LOAD_GENRES,
    payload: movies
  })).toEqual({
    genres: [{id: `All`, title: `All genres`}, {id: `test`, title: `test`}],
  });
});
