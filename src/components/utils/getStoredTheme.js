const getStoredTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? JSON.parse(storedTheme) : initialThemeContext;
};

export default getStoredTheme;