// import { SET_AUTHED_USER } from "../actions/authedUser";
//
// const authedUser = (state = null, action) => {
//   switch (action.type) {
//     case SET_AUTHED_USER:
//       return action.id;
//     default:
//       return state;
//   }
// };
//
// export default authedUser;

import { createReducer } from "@reduxjs/toolkit";
import { setAuthedUser } from "../actions/authedUser";

const authedUser = createReducer('', {
  [setAuthedUser]: (state, action) => (action.payload)
});

export default authedUser;
