import React from 'react'
import { StyledButton } from './StyledComponens'
import { StyledButtonProps } from './types'

export const Button = ({ type, text }: StyledButtonProps) => {
  return <StyledButton type={type}>{text}</StyledButton>
}
