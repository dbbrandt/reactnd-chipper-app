import { createAction} from "@reduxjs/toolkit";
// export const RECEIVE_USERS = "RECEIVE_USERS";
//
// export const receiveUsers = users => ({
//   type: RECEIVE_USERS,
//   users
// });

export const receiveUsers = createAction('RECEIVE_USERS');

