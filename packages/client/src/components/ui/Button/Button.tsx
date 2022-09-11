import React from 'react'
import { StyledButton } from './StyledComponens'
import { StyledButtonProps } from './types'

export const Button = ({ type, text, ...props }: StyledButtonProps) => {
  return (
    <StyledButton type={type} {...props}>
      {text}
    </StyledButton>
  )
}
