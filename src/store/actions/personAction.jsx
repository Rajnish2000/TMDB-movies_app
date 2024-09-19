import axios from "../../utils/axios";
import { getPersonDetails } from "../reducers/personSlice";

const personAction = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const external_ids = await axios.get(`person/${id}/external_ids`);
    const combined_credits = await axios.get(`person/${id}/combined_credits`);
    const movie_credits = await axios.get(`person/${id}/movie_credits`);
    const tv_credits = await axios.get(`person/${id}/tv_credits`);
    const personCompleteDetail = {
      detail: detail.data,
      external_ids: external_ids.data,
      combined_credits: combined_credits.data,
      movie_credits: movie_credits.data,
      tv_credits: tv_credits.data,
    };
    // console.log(personCompleteDetail);
    dispatch(getPersonDetails(personCompleteDetail));
  } catch (err) {
    console.log(err);
  }
};

export default personAction;
