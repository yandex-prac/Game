import React from 'react'
import { StyledButton } from './StyledComponens'
import { StyledButtonProps } from './types'
import { useCustomIntl } from '@/hooks'

export const Button = ({ type, text, ...props }: StyledButtonProps) => {
  return (
    <StyledButton type={type} {...props}>
      {useCustomIntl(text)}
    </StyledButton>
  )
}
