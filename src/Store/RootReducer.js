import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

// slices
import AuthSlice from "./AuthSlice";
import userGithubSlice from "./userGithubSlice";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["auth", "userGithub"],
};

const RootReducer = combineReducers({
  auth: AuthSlice,
  userGithub: userGithubSlice,
});

export default persistReducer(persistConfig, RootReducer);
