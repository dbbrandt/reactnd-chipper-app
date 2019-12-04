import { getDefaultMiddleware } from "@reduxjs/toolkit";
// import thunk from 'redux-thunk';
// import { applyMiddleware } from "redux";
import logger from "./logger";

// export default applyMiddleware( thunk, logger );
const middleware= [...getDefaultMiddleware(), logger];

export default middleware;
