import axios from "axios";
import { FETCH_USER } from "./types";

// fetchUser is an action creator
export const fetchUser = () => {
  return function(dispatch) {
    axios
      .get("/api/current_user")
      .then(res => dispatch({ type: fetchUser, payload: res }));
  };
};
