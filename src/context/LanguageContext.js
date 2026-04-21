import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations } from "../i18n/translations";

const STORAGE_KEY = "portfolio-locale";

function resolvePath(obj, path) {
  let cur = obj;
  for (const key of path.split(".")) {
    cur = cur?.[key];
  }
  return cur;
}

function interpolate(str, vars) {
  if (!vars) return str;
  return str.replace(/\{\{(\w+)\}\}/g, (_, k) =>
    vars[k] !== undefined && vars[k] !== null ? String(vars[k]) : ""
  );
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "el" || stored === "en") return stored;
    } catch {
      /* ignore */
    }
    return "en";
  });

  const setLocale = useCallback((next) => {
    if (next !== "en" && next !== "el") return;
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback(
    (path, vars) => {
      const bundle = translations[locale];
      let value = resolvePath(bundle, path);
      if (typeof value !== "string") {
        value = resolvePath(translations.en, path);
      }
      if (typeof value !== "string") return path;
      return interpolate(value, vars);
    },
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  );

  useEffect(() => {
    document.documentElement.lang = locale === "el" ? "el" : "en";
    const metaTitle = translations[locale]?.meta?.title;
    const metaDesc = translations[locale]?.meta?.description;
    if (metaTitle) document.title = metaTitle;
    let descEl = document.querySelector('meta[name="description"]');
    if (!descEl) {
      descEl = document.createElement("meta");
      descEl.setAttribute("name", "description");
      document.head.appendChild(descEl);
    }
    if (metaDesc) descEl.setAttribute("content", metaDesc);
  }, [locale]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
