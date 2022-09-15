type MenuItemProps = {
  href?: string
  icon: JSX.Element
  textIntl: string
  onClick?: () => void
}

type ItemProps = {
  isActive: boolean
}

export type { MenuItemProps, ItemProps }
