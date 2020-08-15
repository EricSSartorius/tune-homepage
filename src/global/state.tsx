import React, { FC } from "react"
import { LanguageProvider } from "./language"

// Provider Composer imports all Providers so that we can isolate related state
// All state is managed through state hooks in the individual providers
function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  )
}

const ContextProvider: FC = ({ children }) => {
  return (
    <ProviderComposer contexts={[<LanguageProvider />]}>
      {children}
    </ProviderComposer>
  )
}

export { ContextProvider }
