import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjYyMTRmMzVkYTc0NzljNmZiODgxZWM0ZjE1MmYxYyIsIm5iZiI6MTcyNTgxMTAxMC45MzcxNjcsInN1YiI6IjY2ZGRjMzVlMTgyMTE0ZWQ2NDNhYjk5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m2S49gzjFxhsTOUPt12vZNd153NliWWWxDZEaKIBvBA",
  },
});

export default instance;
