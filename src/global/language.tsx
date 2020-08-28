import React, { FC, createContext, useContext, useEffect } from "react"
import { navigate } from "gatsby"
import Cookies from "js-cookie"
import { useCookie } from "../hooks"

export const initialLanguageValues = {
  lang: "en",
  setLang: (_: "en" | "th") => {},
}

export const LanguageContext = createContext(initialLanguageValues)

export const LanguageProvider: FC = ({ children }) => {
  const [lang, setLang] = useCookie({ key: "lang", expires: 365 })

  useEffect(() => {
    if (lang === "en" && window.location.pathname.includes("/th")) {
      navigate(window.location.pathname.replace("/th", "/en"))
    } else if (lang === "th" && window.location.pathname.includes("/en")) {
      navigate(window.location.pathname.replace("/en", "/th"))
    }
  }, [lang])

  useEffect(() => {
    if (Cookies.get("lang")) {
      setLang(Cookies.get("lang"))
    } else if (window.location.pathname.includes("/th")) {
      Cookies.set("lang", "th", { expires: 365 })
      setLang("th")
    } else {
      Cookies.set("lang", "en", { expires: 365 })
      setLang("en")
    }
  }, [])

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
