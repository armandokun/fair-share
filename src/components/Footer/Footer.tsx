import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("translation", { keyPrefix: "footer" });

  return (
    <Container disableGutters>
      <Typography variant="body2">{t("copyright.title")}</Typography>
    </Container>
  );
};

export default Footer;
