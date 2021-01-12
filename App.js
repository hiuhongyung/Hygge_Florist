import React, { useState } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import * as Font from "expo-font";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./store/reducers/products";
import ShopNavigator from "./navigation/ShopNavigator";
import cartReducer from "./store/reducers/cart";
import ordersReducer from "./store/reducers/orders";
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
