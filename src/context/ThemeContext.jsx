/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light");

  function darkTheme() {
    setThemeMode("dark");
  }

  function lightTheme() {
    setThemeMode("light");
  }

  useEffect(
    function () {
      document.querySelector("html").classList.remove("light", "dark");
      document.querySelector("html").classList.add(themeMode);
    },
    [themeMode],
  );

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemeContext was used outside of ThemeProvider");
  return context;
}

export { ThemeProvider, useTheme };
