import { Container, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("translation", { keyPrefix: "footer" });

  const repoURL = "https://github.com/armandokun/fair-share";

  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography>{t("copyright.title")}</Typography>
      <Link href={repoURL}>{t("repository.title")}</Link>
    </Container>
  );
};

export default Footer;
