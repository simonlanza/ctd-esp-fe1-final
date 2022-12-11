import { combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import thunk from 'redux-thunk';
import charactersReducer from './reducers/characters.reducer';


/**
 * Objeto donde guardaremos todos nuestros reducers para luego pasarlos al store
 */
const rootReducer = combineReducers({
    characters: charactersReducer,
});

/**
 * Tipado para el estado global de la aplicación
 */
export type GlobalState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<GlobalState> = useReduxSelector;

/**
 * creacion del store donde estara alamcenado nuestro estado y nuestros reducers
 */
export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)