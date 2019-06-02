import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";

import BasicRouter from "./routes";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <BasicRouter />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
