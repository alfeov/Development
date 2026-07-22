import { isPreferredDarkTheme } from '@/shared/lib/isPreferredDarkTheme'
import {
  getLocalStorageData,
  setLocalStorageData,
} from '@/shared/lib/localStorage'
import { useEffect, useState } from 'react'

const themeKey = 'dev-finder/isDarkTheme'

function initialState() {
  return getLocalStorageData<boolean>(themeKey) ?? isPreferredDarkTheme()
}

export function useToggleTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(initialState)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', isDarkTheme)
  }, [isDarkTheme])

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme)
    setLocalStorageData(themeKey, !isDarkTheme)
  }

  return toggleTheme
}
