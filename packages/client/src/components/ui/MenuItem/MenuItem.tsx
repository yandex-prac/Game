import react from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Item, Text } from './StyledComponents'
import { MenuItemProps } from './types'

export const MenuItem = ({ href, icon, text }: MenuItemProps) => {
  const location = useLocation()
  return (
    <Item>
      <Link to={href}>
        {icon}
        <Text>{text}</Text>
      </Link>
    </Item>
  )
}
