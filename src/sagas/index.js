import { call, takeLatest, put, all, select } from "redux-saga/effects";

import { types as serviceTypes, actions } from "../actions/services";
import { carsService, availabilityService } from "../api/services";

function* fetchCarSaga() {
  //  fetches all the cars from the backend
  try {
    const cars = yield call(carsService);
    yield all(cars.map(car => call(fetchAvailability, car.id, car)));
  } catch (e) {
    console.log("error", e);
  }
}

function* fetchAvailability(id, carObj) {
  //  takes an id and a car object, fetches the availability for the given id,
  //  appends the availability to the object and then adds the obj to a new copy
  //  of the cars array
  try {
    const availability = yield call(availabilityService, id);
    let carsData = yield select(state => state.carsData);
    let newCarsData = carsData.slice(0);
    carObj.available = availability;
    newCarsData.push(carObj);
    yield put(actions.updateCars(newCarsData));
  } catch (e) {
    console.log("error", e);
  }
}

export default function* root() {
  yield takeLatest(serviceTypes.FETCH_CARS_REQUESTED, fetchCarSaga);
}
