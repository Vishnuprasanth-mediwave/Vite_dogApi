import axios from "axios";

export const fetchRandomDogImage = (dog) => {
  return axios.get(`https://dog.ceo/api/breed/${dog}/images/random`);
};

export const fetchAllDogList = () => {
  return axios.get("https://dog.ceo/api/breeds/list/all");
};