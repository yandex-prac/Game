import styled from 'styled-components'
import variables from '../../Variables.module.scss'
import { Link } from 'react-router-dom'
import { DarkModeType } from '../../types'

const Page = styled.div<DarkModeType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ darkMode }) =>
    darkMode ? variables.black100 : variables.white000};

  a {
    color: ${({ darkMode }) =>
      darkMode ? variables.purple000 : variables.blue000};
  }
`

const Title = styled.h1<DarkModeType>`
  margin: 0 0 20px 0;
  font-size: 40px;
  color: ${({ darkMode }) =>
    darkMode ? variables.white100 : variables.$black000};
  font-weight: 500;
  line-height: 40px;
`

const SubTitle = styled.p<DarkModeType>`
  margin: 0 0 70px 0;
  font-size: 20px;
  color: ${({ darkMode }) =>
    darkMode ? variables.white100 : variables.$black000};
  font-weight: 500;
  line-height: 20px;
`

const LinkWrap = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 11px;
  transition: 0.3s opacity;

  &:hover {
    opacity: 0.7;
  }
`

export { Page, Title, SubTitle, LinkWrap }
