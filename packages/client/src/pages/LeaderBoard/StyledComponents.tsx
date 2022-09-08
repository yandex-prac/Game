import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variables from '../../Variables.module.scss'
import { ContentProps, TitleProps } from './types'

const Content = styled.div<ContentProps>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s color;

  a {
    color: ${({ darkMode }) =>
      darkMode ? variables.purple000 : variables.blue000};
  }
`

const Title = styled.h1<TitleProps>`
  margin: 0 0 60px;
  font-size: 14px;
  color: ${({ darkMode }) =>
    darkMode ? variables.white100 : variables.grey000};
  font-weight: 400;
  line-height: 13px;
  transition: 0.3s color;
`

const LinkToGame = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  transition: 0.3s opacity;

  &:hover {
    opacity: 0.8;
  }
`

export { Content, Title, LinkToGame }
