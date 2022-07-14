export const light = {
    text: '#16181C',
    primary: '#E4C180',
    darkerPrimary: '#c49a4e',
    background: '#ffffff',
}

export const dark = {
    text: '#ffffff',
    primary: '#E4C180',
    darkerPrimary: '#c49a4e',
    background: '#16181C',
}

export function fetchTheme(aTheme) {
    return aTheme === 'light' ? light : dark;
}

export function fetchReverseTheme(aTheme) {
    return aTheme === 'light' ? dark : light;
}