import { types } from "./types";

export const initialState = {
    theme: "dark",
    language: "en",
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.SET_DARK_THEME}`:
        case `${types.SET_LIGHT_THEME}`:
            return {
                ...state,
                theme: action.payload,
            };

        case `${types.SET_LANGUAGE}`:
            return {
                ...state,
                language: action.payload,
            };
        default:
            return state
    }
}