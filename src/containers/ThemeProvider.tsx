import { createContext, useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";

type ColorMode = "light" | "dark" | null;

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ThemeContextProvider = ({ children }) => {
  // if dark mode local storage is there, use its value to set the theme
  // otherwise, use the one that is prefered by the user
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const savedColorMode = localStorage.getItem("colorMode") as ColorMode;

  const [mode, setMode] = useState<"dark" | "light">(
    savedColorMode || (prefersDarkMode ? "dark" : "light")
  );

  useEffect(() => {
    if (!savedColorMode) return localStorage.setItem("colorMode", mode);

    if (savedColorMode !== mode) return localStorage.setItem("colorMode", mode);
  }, [mode, savedColorMode]);

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

export default ThemeContextProvider;
