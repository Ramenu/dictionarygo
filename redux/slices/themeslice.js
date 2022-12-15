import { createSlice } from "@reduxjs/toolkit";

// Constants for our colours
export const WHITE = "#fff";
export const BLACK = "#1E1B1B";
export const LIGHT_GREY = "#E2DEDE";
export const DARK_GREY = "#494343";
export const SILVER = "#D3D1D1";
export const UNDERLAY_COLOR_LIGHT_THEME = "#9F9E9E";
export const UNDERLAY_COLOR_DARK_THEME = "#525151";


// Constants for icon paths
const LIGHT_MODE_ICON_PATH = require("../../assets/light_mode_icon.png");
const DARK_MODE_ICON_PATH = require("../../assets/dark_mode_icon.png");


export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        // Default configurations for light theme
        darkModeEnabled: false,
        color: WHITE,
        icon: LIGHT_MODE_ICON_PATH,
        textInputColor: LIGHT_GREY,
        textColor: BLACK,
        buttonColor: SILVER,
        underlayColor: UNDERLAY_COLOR_LIGHT_THEME,
        // range is set to 255-0 because on the first render, it will animate from black to white
        input: 255, 
        output: 0,
        animationDuration: 170, // 170ms (this is a constant and does not change)
        slowAnimationDuration: 200 // For animations with slightly higher delay
    },
    reducers: {
        changeTheme: (state, action) => {
            if (state.darkModeEnabled) {
                return {
                    ...state, 
                    darkModeEnabled: false, 
                    color: WHITE, 
                    icon: LIGHT_MODE_ICON_PATH, 
                    textInputColor: LIGHT_GREY, 
                    textColor: BLACK,
                    buttonColor: LIGHT_GREY,
                    underlayColor: UNDERLAY_COLOR_LIGHT_THEME,
                    clickedButton: true,
                    // Interpolation values from 255-0 (black to white)
                    input: 255,
                    output: 0
                };
            }
            return {
                ...state, 
                darkModeEnabled: true, 
                color: BLACK, 
                icon: DARK_MODE_ICON_PATH, 
                textInputColor: DARK_GREY,
                textColor: SILVER,
                buttonColor: DARK_GREY,
                underlayColor: UNDERLAY_COLOR_DARK_THEME,
                clickedButton: true,
                // Interpolation values from 0-255 (white to black)
                input: 0,
                output: 255
            };
        }
    }
});

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;