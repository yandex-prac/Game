import styled from 'styled-components'
import v from '../../Variables.module.scss'
import { Link } from 'react-router-dom'
import { PageProps, TitleProps, SubTitleProps, LinkProps } from './types'

const Page = styled.div<PageProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ darkMode }) => (darkMode ? v.black100 : v.white000)};
`

const Img = styled.img`
  width: 130px;
  height: 195px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 30px;
`

const Title = styled.h1<TitleProps>`
  margin: 0 0 20px 0;
  font-size: 40px;
  color: ${({ darkMode }) => (darkMode ? v.white100 : v.$black000)};
  font-weight: 500;
  line-height: 40px;
`

const SubTitle = styled.p<SubTitleProps>`
  margin: 0 0 70px 0;
  font-size: 20px;
  color: ${({ darkMode }) => (darkMode ? v.white100 : v.$black000)};
  font-weight: 500;
  line-height: 20px;
`

const LinkWrap = styled(Link)<LinkProps>`
  text-decoration: none;
  font-size: 14px;
  color: ${({ darkMode }) => (darkMode ? v.purple : v.blue000)};
  font-weight: 500;
  line-height: 11px;
  transition: 0.3s opacity;

  &:hover {
    opacity: 0.7;
  }
`

export { Page, Img, Title, SubTitle, LinkWrap }
