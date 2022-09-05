import React from 'react'
import styled from 'styled-components'

export type StyledLinkProps = {
  auth?: boolean,
  children: React.ReactNode
}

const variables = {
  white: '#FFFFFF',
  blue: '#3369F3',
}

const StyledLink = styled.a<StyledLinkProps>`
  color: ${variables.blue};
  margin: 14px 0;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  text-align: ${({auth}) => auth ? 'center' : 'start'};
`

export const Link = ({children, auth} : StyledLinkProps) => {
  return <StyledLink auth={auth}> {children} </StyledLink>
}
