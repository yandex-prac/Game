import react, { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Item, Button, Text } from './StyledComponents'
import { MenuItemProps } from './types'

export const MenuItem = memo(({ href, icon, text }: MenuItemProps) => {
  const location = useLocation()
  const isActive = location.pathname === href ? true : false
  return (
    <Item isActive={isActive}>
      {href ? (
        <Link to={href}>
          {icon}
          <Text>{text}</Text>
        </Link>
      ) : (
        <Button type="button">
          {icon}
          <Text>{text}</Text>
        </Button>
      )}
    </Item>
  )
})
