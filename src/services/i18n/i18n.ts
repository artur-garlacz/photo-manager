//Services
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//Translations
import en from "./en";

import "./i18n";

i18n
  .use({
    type: "postProcessor",
    name: "trim",
    process: function (value: string) {
      return value.trim();
    },
  })
  .use(initReactI18next)
  .init({
    ns: ["common", "nav"],
    defaultNS: "common",
    resources: {
      en,
    },
    lng: "en",
    fallbackLng: "en",
    react: {
      useSuspense: true,
    },
    postProcess: ["trim"],
    interpolation: {
      format: (value, format) => {
        if (format === "money") return value ? (value / 100).toFixed(2) : "0";
        return value;
      },
    },
  });

export default i18n;

declare module "react-i18next" {
  type CustomResources = typeof en;
  interface Resources extends CustomResources {}
}
