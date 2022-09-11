import React from 'react'
import { StyledLink } from './StyledComponens'
import { StyledLinkProps } from './types'

export const Link = ({ text, to, ...props }: StyledLinkProps) => {
  return (
    <StyledLink to={to} {...props}>{text}</StyledLink>
  )
}
