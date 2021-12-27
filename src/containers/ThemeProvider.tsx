import { createContext, useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ThemeContextProvider = ({ children }) => {
  const isDarkModeEnabled = localStorage.getItem("darkMode") === "true";

  const [mode, setMode] = useState<"light" | "dark">(
    isDarkModeEnabled ? "dark" : "light"
  );

  useEffect(() => {
    if (isDarkModeEnabled && mode === "dark") return;
    if (mode === "dark") return localStorage.setItem("darkMode", "true");

    return localStorage.setItem("darkMode", "false");
  }, [isDarkModeEnabled, mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export { ThemeContextProvider };
