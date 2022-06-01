import { Box, Container, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Footer, Form, LanguageSelector, ToggleColorMode } from "./components";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 5, flex: "1 0 auto" }}>
        <Box sx={{ mb: 1 }}>
          <Stack direction="row" spacing={1}>
            <LanguageSelector />
            <ToggleColorMode />
          </Stack>
        </Box>
        <Typography variant="h4">{t("intro.title")}</Typography>
        <Typography variant="subtitle1">{t("intro.description")}</Typography>
        <Form />
      </Container>
      <Container maxWidth="md" sx={{ mt: 2, flexShrink: 0 }}>
        <Footer />
      </Container>
    </>
  );
}

export default App;
