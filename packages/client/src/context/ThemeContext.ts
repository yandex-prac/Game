import { createContext } from 'react'

type ThemeType = {
  darkMode: boolean
  setDarkMode: (prevState: boolean) => void
}
const defaultValue: ThemeType = {
  darkMode: false,
  setDarkMode: () => false,
}

export const ThemeContext = createContext<ThemeType>(defaultValue)
