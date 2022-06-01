import { Button, Container, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("translation", { keyPrefix: "footer" });

  return (
    <footer>
      <Container disableGutters sx={{ mt: 2, mb: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2">{t("copyright.title")}</Typography>
          <Button href="https://github.com/armandokun/fair-share/fork">
            Fork this project on Github
          </Button>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
