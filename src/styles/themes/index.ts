import { createContext } from "react";

export const themes = {
  light: {
    name: 'light',
    colors: {
      primary: '#7159c1',
      secondary: '#c62e65',
      background: '#f5f5f5',
      text: '#333',
      card: '',
      line: '#ccc',
      small: '#ccc'
    },
  },
  dark: {
    name: 'dark',
    colors: {
      primary: '#7159c1',
      secondary: '#c62e65',
      background: '#0f0f0f',
      text: '#F0ECE2',
      card: '#1c1c1e',
      line: '#333',
      small: '#333'
    },
  }
};

export const ThemeModeContext = createContext({ toggleTheme: () => {} });
