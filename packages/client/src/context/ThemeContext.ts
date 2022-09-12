import { createContext } from 'react'
import { DarkModeType } from '../types'

type ThemeType = {
  setDarkMode: (prevState: boolean) => void
}
const defaultValue: ThemeType & DarkModeType = {
  darkMode: false,
  setDarkMode: () => false,
}

export const ThemeContext = createContext<ThemeType & DarkModeType>(
  defaultValue
)
