export const types = {
  FETCH_CARS_REQUESTED: "SERV/FETCH_CARS_REQUESTED",
  FETCH_CARS_SUCCESS: "SERV/FETCH_CARS_SUCCESS"
};

export const actions = {
  fetchCars: () => ({ type: types.FETCH_CARS_REQUESTED }),
  updateCars: cars => ({ type: types.FETCH_CARS_SUCCESS, cars })
};
