import React from "react";
import { BrowserRouter } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import Template from "./components/Template";
import Routes from "./config/routes";
import useSavedState from "./hooks/useSavedState";
import GlobalStyle from "./styles/global";
import { themes, ThemeModeContext } from "./styles/themes";

/**
 * TODO: i18n
 * TODO: path aliases
 */

const App = () => {
  const [theme, setTheme] = useSavedState<DefaultTheme>("theme", themes.light);

  const toggleTheme = () => {
    setTheme(theme.name === "light" ? themes.dark : themes.light);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <ThemeModeContext.Provider value={{ toggleTheme }}>
          <Template>
            <Routes />
          </Template>
        </ThemeModeContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
