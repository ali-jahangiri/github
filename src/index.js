import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppRouter from "./Router/AppRouter";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
