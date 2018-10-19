import axios from "../config/axios";

export const availabilityService = id => {
  const url = "/availability?id=" + id;
  return axios.get(url).then(response => {
    console.log("availabilityService", response);
    return response.data;
  });
};

export const carsService = () => {
  const url = "/cars";
  return axios.get(url).then(response => {
    console.log("carsService", response);
    return response.data;
  });
};
