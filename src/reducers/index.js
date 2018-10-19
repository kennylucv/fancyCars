import { types as dropdownTypes } from "../actions/dropdown";
import { types as serviceTypes } from "../actions/services";

const INITAL_STATE = {
  hello: "world",
  sortOption: null,
  carsData: []
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case dropdownTypes.SELECTED_SORT:
      return { ...state, sortOption: action.sortOption };
    case serviceTypes.FETCH_CARS_REQUESTED:
      return { ...state, carsData: [] };
    case serviceTypes.FETCH_CARS_SUCCESS:
      return { ...state, carsData: action.cars, sortOption: "Availability" };
    default:
      return state;
  }
};
