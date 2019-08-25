import { applyMiddleware, createStore, compose, combineReducers } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// 用来支持 dispatch push
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

import taobaoApp from "./store/reducer";
import { basic_url } from "./env";

export default function configureStore(preloadedState) {
  const history = createBrowserHistory({
    basename: basic_url
  });
  const createRootReducer = history =>
    combineReducers({
      router: connectRouter(history),
      ...taobaoApp
    });
  const rootReducer = createRootReducer(history);
  const middlewares = [thunk, routerMiddleware(history), logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const persistConfig = {
    key: "root",
    storage
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    preloadedState,
    composedEnhancers
  );

  const persistor = persistStore(store);
  return { store, persistor, history };
}
