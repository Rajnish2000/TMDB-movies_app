import axios from "../../utils/axios";
import { getMovieDetails } from "../reducers/movieSlice";

const movieAction = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const external_ids = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const watch_provider = await axios.get(`/movie/${id}/watch/providers`);
    const completeDetails = {
      detail: detail.data,
      translations: translations.data.translations,
      external_ids: external_ids.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watch_provider: watch_provider.data.results.IN,
    };
    dispatch(getMovieDetails(completeDetails));
  } catch (err) {
    console.log(err);
  }
};

export default movieAction;
