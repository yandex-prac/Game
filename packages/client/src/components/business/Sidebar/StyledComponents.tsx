import styled from 'styled-components'
import variables from '../../../Variables.module.scss'
import { ContainerProps } from './types'

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  min-height: 100vh;
  width: 257px;
  box-shadow: ${variables.shadowSoft000};
  padding-bottom: 17px;
  display: flex;
  flex-direction: column;
  grid-row: 1/-3;
  background-color: ${({ darkMode }) =>
    darkMode ? variables.black200 : variables.white000};
  transition: 0.3s background-color;
`

const Img = styled.img`
  max-width: 28px;
  object-fit: cover;
  object-position: center;
  margin: 10px 0 8px 24px;
`

export { Container, Img }
