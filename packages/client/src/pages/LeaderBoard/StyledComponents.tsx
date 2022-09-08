import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variables from '../../Variables.module.scss'
import { TitleProps, LinkToGameProps } from './types'

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1<TitleProps>`
  margin: 0 0 60px;
  font-size: 14px;
  color: ${({ darkMode }) =>
    darkMode ? variables.white100 : variables.grey000};
  font-weight: 400;
  line-height: 13px;
`

const LinkToGame = styled(Link)<LinkToGameProps>`
  text-decoration: none;
  font-size: 16px;
  color: ${({ darkMode }) =>
    darkMode ? variables.purple000 : variables.blue000};
  font-weight: 500;
  line-height: 16px;
  transition: 0.3s opacity;

  &:hover {
    opacity: 0.8;
  }
`

export { Content, Title, LinkToGame }
