// export const SET_AUTHED_USER = "SET_AUTHED_USER";
//
// export const setAuthedUser = id => ({
//   type: SET_AUTHED_USER,
//   id
// });

import { createAction} from "@reduxjs/toolkit";

export const setAuthedUser = createAction('SET_AUTHED_USER');
