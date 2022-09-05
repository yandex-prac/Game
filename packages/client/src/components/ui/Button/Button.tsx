import React from 'react'
import styled from 'styled-components'

export type StyledButtonProps = {
  type?: 'button' | 'submit'
  children: React.ReactNode
  onClick?: () => void
}

const variables = {
  white: '#FFFFFF',
  blue: '#3369F3',
}

const StyledButton = styled.button<StyledButtonProps>`
  width: 280px;
  height: 37px;
  color: ${variables.white};
  background-color: ${variables.blue};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  border-radius: 8px;
  border: none;
`

export const Button = ({ type, children }: StyledButtonProps) => {
  return <StyledButton type={type}>{children}</StyledButton>
}
