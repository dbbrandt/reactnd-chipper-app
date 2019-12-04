import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import middleware from "./middleware";
import reducer from "./reducers";

// const store = createStore(reducer, middleware);'
const store = configureStore({
  reducer,
  middleware
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
