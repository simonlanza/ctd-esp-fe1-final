import { combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import thunk from "redux-thunk";
import charactersReducer from "./reducers/characters.reducer";

/**
 * Objeto donde se almacenan los reducers antes de pasar  al store
 */
const rootReducer = combineReducers({
  characters: charactersReducer,
});

/**
 * Tipado del estado global
 */
export type GlobalState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<GlobalState> = useReduxSelector;

/**
 * Creacion del store, encargado de almacenar el estado y los reducers
 */
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
