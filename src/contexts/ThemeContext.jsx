import { createContext } from "react";

export const ThemeContext = createContext({});

export const initialThemeContext = {
    style: 'default',
    mode: 'light'
};