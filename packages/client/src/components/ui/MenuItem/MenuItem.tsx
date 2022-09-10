import React, { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Item, Button, Text } from './StyledComponents'
import { MenuItemProps } from './types'
import { DarkModeType } from '../../../types'

export const MenuItem = memo(
  ({ darkMode, href, icon, text, onClick }: MenuItemProps & DarkModeType) => {
    const location = useLocation()

    const isActive = location.pathname === href ? true : false

    return (
      <Item
        darkMode={darkMode}
        isActive={isActive}
        onClick={onClick ? onClick : () => false}>
        {href ? (
          <Link to={href}>
            {icon}
            <Text darkMode={darkMode}>{text}</Text>
          </Link>
        ) : (
          <Button darkMode={darkMode} type="button">
            {icon}
            <Text darkMode={darkMode}>{text}</Text>
          </Button>
        )}
      </Item>
    )
  }
)
