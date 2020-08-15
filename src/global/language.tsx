import React, {
  FC,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react"
import { navigate } from "gatsby"

export const initialLanguageValues = {
  isThai: false,
  setIsThai: (_: boolean) => {},
}

export const LanguageContext = createContext(initialLanguageValues)

export const LanguageProvider: FC = ({ children }) => {
  const [isThai, setIsThai] = useState(false)

  useEffect(() => {
    if (!isThai && window.location.pathname.endsWith("/th/")) {
      navigate(window.location.pathname.replace("/th/", "/en/"))
    } else if (isThai && window.location.pathname.endsWith("/en/")) {
      navigate(window.location.pathname.replace("/en/", "/th/"))
    }
  }, [isThai])

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
