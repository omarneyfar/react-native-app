import { combineReducers, createStore } from "redux";
import notificationReducer from "./reducers/notification";
import productReducer from "./reducers/product";
import userReducer from "./reducers/user";

const rootReducer = combineReducers({
  product: productReducer,
  notification: notificationReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
  