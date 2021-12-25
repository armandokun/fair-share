import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const selectedLanguage = i18n.language;
  const availableLanguages = Object.keys(i18n.services.resourceStore.data);

  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };

  const getLanguageName = (language: string) =>
    language === "en" ? "EN" : "LT";

  const renderLanguageItems = () =>
    availableLanguages.map((language) => (
      <MenuItem value={language} key={language}>
        {getLanguageName(language)}
      </MenuItem>
    ));

  return (
    <FormControl>
      <Select
        id="language-select"
        value={selectedLanguage}
        onChange={handleChange}
      >
        {renderLanguageItems()}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
