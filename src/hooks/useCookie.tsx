import { useState, useEffect } from "react"
import Cookies from "js-cookie"

type Props = {
  key: string
  expires?: number
}

// Used to easily get and set cookies
// * expires after 1 day unless otherwise stated
export const useCookie = ({ key, expires = 1 }: Props) => {
  const initial = Cookies.get(key)
  const [cookie, setCookie] = useState(initial)

  useEffect(() => {
    if (cookie) {
      Cookies.set(key, cookie, { expires })
    }
  }, [cookie, key])

  return [cookie, setCookie]
}

export default useCookie
