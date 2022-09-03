import React from 'react'
import { Page, Img, Title, SubTitle, LinkWrap } from './StyledComponents'
import logo from '../../image/logo.svg'
import type { PageErrorProps } from './types'

export const PageError = ({ title, subtitle, href }: PageErrorProps) => {
  return (
    <Page>
      <Img src={logo} alt="Логотип игры pacman" />
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <LinkWrap to={href}>Назад</LinkWrap>
    </Page>
  )
}
