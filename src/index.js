import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import allReducers from "./reducer/index";
import { Provider } from "react-redux";
/*
import { createStore } from "redux";

//action
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

//action
const decrement = () => {
  return {
    type: "DECCREMENT",
  };
};

//reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECCREMENT":
      return state - 1;

    default:
      break;
  }
};

//store
let store = createStore(counter);

//display it in console
store.subscribe(() => console.log(store.getState()));

//dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

//STORE -> Globalized state
//Store holds all the data required for application
//Store maintains the state of all the data
//Simply store of data, globalized state

//ACTION -> INCREMENT
//Event that causes change of state in store

//REDUCER ->
//Responsible for changing the state in store

//DISPATCH ->
//Execute action

*/

const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
