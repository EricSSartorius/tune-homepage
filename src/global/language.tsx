import React, {
  FC,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react"
import { navigate } from "gatsby"
import Cookies from "js-cookie"
import { useCookie } from "../hooks"

export const initialLanguageValues = {
  isThai: false,
  setIsThai: (_: boolean) => {},
}

export const LanguageContext = createContext(initialLanguageValues)

export const LanguageProvider: FC = ({ children }) => {
  const [isThai, setIsThai] = useCookie({ key: "isThai", expires: 365 })

  useEffect(() => {
    if (!isThai && window.location.pathname.endsWith("/th/")) {
      navigate(window.location.pathname.replace("/th/", "/en/"))
    } else if (isThai && window.location.pathname.endsWith("/en/")) {
      navigate(window.location.pathname.replace("/en/", "/th/"))
    }
  }, [isThai])

  useEffect(() => {
    if (Cookies.get("isThai")) {
      const isThaiCookie = Cookies.get("isThai") === "true"
      setIsThai(isThaiCookie)
    }
  }, [])

  return (
    <LanguageContext.Provider
      value={{
        isThai,
        setIsThai,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
