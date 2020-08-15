import React, { FC, useState, createContext, useContext } from "react"

export const initialLanguageValues = {
  isThai: false,
  setIsThai: (_: boolean) => {},
}

export const LanguageContext = createContext(initialLanguageValues)

export const LanguageProvider: FC = ({ children }) => {
  const [isThai, setIsThai] = useState(false)

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
