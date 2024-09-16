import axios from "../../utils/axios";
import { getTvShowDetails } from "../reducers/tvShowSlice";

const tvShowAction = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const external_ids = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const translations = await axios.get(`/tv/${id}/translations`);
    const watch_provider = await axios.get(`/tv/${id}/watch/providers`);
    const completeDetails = {
      detail: detail.data,
      translations: translations.data.translations,
      external_ids: external_ids.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watch_provider: watch_provider.data.results.IN,
    };
    dispatch(getTvShowDetails(completeDetails));
  } catch (err) {
    console.log(err);
  }
};

export default tvShowAction;
