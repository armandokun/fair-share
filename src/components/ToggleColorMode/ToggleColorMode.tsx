import { useContext } from "react";

import { IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { WbSunnyOutlined, DarkModeOutlined } from "@mui/icons-material";

import { ColorModeContext } from "../../containers/ThemeProvider";

const ToggleDarkMode = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Tooltip title={`Toggle color mode`}>
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlined />
        ) : (
          <WbSunnyOutlined />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ToggleDarkMode;
