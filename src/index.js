import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./Styles/Base.scss";
import "./Styles/indexTailwind.css";

import AppRouter from "./Router/AppRouter";

import storePackage from "./Store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storePackage.store}>
      <PersistGate persistor={storePackage.persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
