import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading} from "react-redux-loading";

const AUTHED_ID = "dan_abramov";

export const handleGetInitialData = () => {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ tweets, users }) => {
      console.log("Handling getInitialData");
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
};
