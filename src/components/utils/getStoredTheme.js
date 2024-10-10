import {
    initialThemeContext,
} from '../../contexts/ThemeContext';

const getStoredTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    try {
        return storedTheme ? JSON.parse(storedTheme) : initialThemeContext; 
    } catch (error) {
        return initialThemeContext;
    }
};

export default getStoredTheme;
