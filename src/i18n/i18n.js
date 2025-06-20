import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import zh from "./locales/zh.json";

// Get language from URL query param
const params = new URLSearchParams(window.location.search);
const langParam = params.get("lang");

// Supported languages
const resources = {
  en,
  zh,
};

// Save to localStorage if `lang` is valid
if (langParam && ["en", "zh"].includes(langParam)) {
  localStorage.setItem("language", langParam);
}

// Final language to use
const lng = langParam || localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng,
  fallbackLng: "zh",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
