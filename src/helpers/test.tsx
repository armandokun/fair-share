import { I18nextProvider } from "react-i18next";

import i18n from "../translations";

export const withIntl = (children: JSX.Element) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
