import React from 'react'
import { StyledLink } from './StyledComponens'
import { StyledLinkProps } from './types'

export const Link = ({ text, to }: StyledLinkProps) => {
  return <StyledLink to={to}>{text}</StyledLink>
}
