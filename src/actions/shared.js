import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "dan_abramov";

export const handleGetInitialData = () => {
  return dispatch => {
    return getInitialData().then(({ tweets, users }) => {
      console.log("Handling getInitialData");
      dispatch(receiveTweets(tweets));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
};
