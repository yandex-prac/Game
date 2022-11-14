import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variables from '@/Variables.module.scss'
import { DarkModeType } from '@/types'

const Content = styled.div<DarkModeType>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: 0.3s color;

  a {
    color: ${({ darkMode }) =>
      darkMode ? variables.purple000 : variables.blue000};
  }
`

const Title = styled.h1<DarkModeType>`
  margin: 0 0 60px;
  font-size: 14px;
  color: ${({ darkMode }) =>
    darkMode ? variables.white100 : variables.grey000};
  font-weight: 400;
  line-height: 13px;
`

const LinkToGame = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  transition: 0.3s opacity, 0.3s color;

  &:hover {
    opacity: 0.8;
  }
`

const Loading = styled.div`
  text-align: center;
`

const LeaderItem = styled.div`
  display: flex;
  gap: 40px;
`

export { Content, Title, LinkToGame, Loading, LeaderItem }
