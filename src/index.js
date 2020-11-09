import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./store/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router >
  <Provider store={store}>
    <App />
  </Provider>
  </Router>,
  rootElement
);
