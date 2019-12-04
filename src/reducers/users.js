// import { RECEIVE_USERS } from "../actions/users";
//
// const users = (state = {}, action) => {
//   switch (action.type) {
//     case RECEIVE_USERS:
//       return {
//         ...state,
//         ...action.users
//       };
//     default:
//       return state;
//   }
// };
//
// export default users;

import { receiveUsers} from "../actions/users";
import { createReducer} from "@reduxjs/toolkit";

const users = createReducer({}, {
  [receiveUsers]: (state, action) => ({...state, ...action.payload})
});

export default users;
