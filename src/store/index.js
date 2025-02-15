import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import flowerReducer from "../slices/flower.slice";
import productReducer from "../slices/product.slice";
import { flowerApi } from "../services/flowerApi";
import { productAPI } from "../services/productApi";

const persistConfig = {
  key: "root",
  storage,
};
const staticReducers = {
  theme: "theme",
};

const persistedReducer = persistReducer(persistConfig, flowerReducer);

export const store = configureStore({
  reducer: {
    [flowerApi.reducerPath]: flowerApi.reducer,
    [productAPI.reducerPath]: productAPI.reducer,
    flower: persistedReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(flowerApi.middleware, productAPI.middleware),
});

// Add a dictionary to keep track of the registered async reducers
store.asyncReducers = {};

// Create an inject reducer function
// This function adds the async reducer, and creates a new combined reducer
export const injectReducer = (key, asyncReducer) => {
  store.asyncReducers[key] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  return asyncReducer;
};

function createReducer(asyncReducers = {}) {
  if (Object.keys(asyncReducers).length === 0) {
    return (state) => state;
  } else {
    return combineReducers({
      ...staticReducers,
      ...asyncReducers,
    });
  }
}

export const Persister = persistStore(store);
