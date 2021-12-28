import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const selectedLanguage = localStorage.getItem("language") || "en";
  const availableLanguages = Object.keys(i18n.services.resourceStore.data);

  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);

    localStorage.setItem("language", event.target.value);
  };

  const renderLanguageItems = () =>
    availableLanguages.map((language) => (
      <MenuItem value={language} key={language}>
        {language.toLocaleUpperCase()}
      </MenuItem>
    ));

  return (
    <FormControl>
      <Select
        id="language-select"
        aria-label="language-select"
        data-testid="language-select"
        size="small"
        value={selectedLanguage}
        onChange={handleChange}
      >
        {renderLanguageItems()}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
