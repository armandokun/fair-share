import { useContext } from "react";

import { IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { WbSunnyOutlined, DarkModeOutlined } from "@mui/icons-material";

import { ColorModeContext } from "../../containers/ThemeProvider";
import { useTranslation } from "react-i18next";

const ToggleDarkMode = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { t } = useTranslation();

  const title = t("settings.color_mode.title");

  return (
    <Tooltip title={title}>
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
