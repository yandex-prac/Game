import styled from 'styled-components'
import variables from '../../Variables.module.scss'
import { Link } from 'react-router-dom'

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0 0 60px;
  font-size: 14px;
  color: ${variables.grey000};
  font-weight: 400;
  line-height: 13px;
`

const LinkToGame = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: ${variables.blue000};
  font-weight: 500;
  line-height: 16px;
  transition: 0.3s opacity;

  &:hover {
    opacity: 0.8;
  }
`

export { Content, Title, LinkToGame }
