"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Dictionary } from "./Dictionary";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("es"); // default
  
  // Persistence using localStorage
  useEffect(() => {
    const stored = localStorage.getItem("siteLang");
    if (stored && Dictionary[stored]) {
      setLang(stored);
    }
  }, []);

  const changeLanguage = (newLang) => {
    if (Dictionary[newLang]) {
      setLang(newLang);
      localStorage.setItem("siteLang", newLang);
    }
  };

  // Helper method to retrieve strings from dict based on dot notation e.g "hero.title"
  const t = (key) => {
    const keys = key.split(".");
    let current = Dictionary[lang];
    
    for (let k of keys) {
      if (current[k] === undefined) {
        return key; // return the raw key if not found
      }
      current = current[k];
    }
    
    // Replace dynamic variables if year is in translation (like footer)
    if (typeof current === "string" && current.includes("{year}")) {
      return current.replace("{year}", new Date().getFullYear());
    }

    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
