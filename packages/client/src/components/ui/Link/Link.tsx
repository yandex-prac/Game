import React from 'react'
import { StyledLink } from './StyledComponens'
import { StyledLinkProps } from './types'
import { useCustomIntl } from '@/hooks'

export const Link = ({ text, to, ...props }: StyledLinkProps) => {
  return (
    <StyledLink to={to} {...props}>
      {useCustomIntl(text)}
    </StyledLink>
  )
}
