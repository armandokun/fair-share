import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Footer, Form, LanguageSelector, ToggleColorMode } from "./components";

function App() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ToggleColorMode />
        <LanguageSelector />
      </Box>
      <Typography variant="h4">{t("intro.title")}</Typography>
      <Typography variant="subtitle1">{t("intro.description")}</Typography>
      <Form />
      <Footer />
    </Container>
  );
}

export default App;
