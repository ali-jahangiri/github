import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import reducer from "./RootReducer";

const store = configureStore({ reducer });

const storePackage = {
  store,
  persistor: persistStore(store),
};

export default storePackage;
