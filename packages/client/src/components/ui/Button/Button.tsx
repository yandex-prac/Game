import React from 'react'
import { StyledButton } from './StyledComponens'
import { StyledButtonProps } from './types'
import { useCustomIntl } from '@/hooks'

export const Button = ({ type, textIntl, ...props }: StyledButtonProps) => {
  return (
    <StyledButton type={type} {...props}>
      {useCustomIntl(textIntl)}
    </StyledButton>
  )
}
