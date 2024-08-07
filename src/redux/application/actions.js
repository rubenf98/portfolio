import { types } from "./types";

export function setLightTheme() {
    return {
        type: types.SET_LIGHT_THEME, payload: "light"
    };
}

export function setDarkTheme() {
    return {
        type: types.SET_DARK_THEME, payload: "dark"
    };
}


export function setLanguage(val) {
    return {
        type: types.SET_LANGUAGE, payload: val
    };
}
