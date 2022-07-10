import React from "react";

// Theme
import { ThemeProvider } from "styled-components";
import { df_light, df_dark } from "./styles/themes";
import { GlobalStyles } from "./styles/global.css";
import { useDarkMode } from "./hooks/useDarkMode";

const App = () => {
    const [darkMode, toggleTheme, componentMounted] = useDarkMode();

    const actualTheme = darkMode ? df_dark : df_light;

    if (!componentMounted) {
        return null;
    }

    return (
        <ThemeProvider theme={actualTheme}>
            <GlobalStyles />
            <h1>App</h1>
        </ThemeProvider>
    );
};

export default App;
