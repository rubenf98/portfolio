export const light = {
    text: '#16181C',
    primary: '#E4C180',
    accent: '#c49a4e',
    background: '#ffffff',
    scrollIndicator: '#16181C44',
    scrollIndicatorAccent: '#16181Ca7',
}

export const dark = {
    text: '#ffffff',
    primary: '#c49a4e',
    accent: '#E4C180',
    background: '#16181C',
    scrollIndicator: '#ffffff44',
    scrollIndicatorAccent: '#ffffffa7',
}

export function fetchTheme(aTheme) {
    return aTheme === 'light' ? light : dark;
}

export function fetchReverseTheme(aTheme) {
    return aTheme === 'light' ? dark : light;
}