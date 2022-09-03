import React from 'react'
import { Page, Img, Title, SubTitle, LinkWrap } from './StyledComponents'
import logo from '../../image/logo.svg'

export const PageNotFound = () => {
  return (
    <Page>
      <Img src={logo} alt="Логотип игры pacman" />
      <Title>404</Title>
      <SubTitle>Не туда попали</SubTitle>
      <LinkWrap to="/">Назад</LinkWrap>
    </Page>
  )
}
