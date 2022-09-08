type MenuItemProps = {
  darkMode: boolean
  href?: string
  icon: JSX.Element
  text: string
  onClick?: () => void
}

type ItemProps = {
  darkMode: boolean
  isActive: boolean
}

type ButtonProps = {
  darkMode: boolean
}

type TextProps = {
  darkMode: boolean
}

export type { MenuItemProps, ItemProps, ButtonProps, TextProps }
