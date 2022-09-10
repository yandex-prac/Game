type MenuItemProps = {
  href?: string
  icon: JSX.Element
  text: string
  onClick?: () => void
}

type ItemProps = {
  isActive: boolean
}

export type { MenuItemProps, ItemProps }
