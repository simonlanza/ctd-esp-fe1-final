import { Reducer } from "@reduxjs/toolkit";
import { Character } from "../../types/characters.type";
import { CharactersActions } from "../../types/characters.actions";


export interface CharactersState {
    search: string;
    page: number;
    characters: Character[];
    status: 'idle' | 'loading' | 'success' | 'failed';
    favorites: Character[];
}

const initialState: CharactersState = {
    search: '',
    page: 1,
    characters: [],
    status: 'idle',
    favorites: [],
}

const charactersReducer: Reducer<CharactersState, CharactersActions> = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL_FETCH_OF_CHARACTERS':
            return {
                ...state,
                page: action.payload,
                status: 'loading',
            }
        case 'INITIAL_FETCH_OF_CHARACTERS_SUCCESS':
            return {
                ...state,
                characters: action.payload,
                status: 'success'
            }
        case 'INITIAL_FETCH_OF_CHARACTERS_ERROR':
            return {
                ...state,
                status: 'failed'
            }
        case 'CHANGE_PAGE': 
            return {
                ...state,
                page: action.payload,
                status: 'loading'
            }
        case 'SEARCH_CHARACTERS':
            return {
                ...state,
                search: action.payload,
                status: 'loading'
            }
        case 'SEARCH_CHARACTERS_SUCCESS':
            return {
                ...state,
                characters: action.payload,
                status: 'success'
            }
        case 'SEARCH_CHARACTERS_ERROR':
            return {
                ...state,
                status: 'failed',
                characters: []
            }
        case 'RESET_SEARCH': 
            return {
                ...state,
                search: ''
            }
        case 'TOGGLE_FAVORITE':
            return {
                ...state,
                favorites: state.favorites.some(character => character.id === action.payload.id) ? state.favorites.filter(character => character.id !== action.payload.id) : [action.payload, ...state.favorites.filter(character => character.id !== action.payload.id)],
            }
        case 'REMOVE_ALL_FROM_FAVORITES':
            return {
                ...state,
                favorites: []
            }
        default:
            return state
    }
}

export default charactersReducer;