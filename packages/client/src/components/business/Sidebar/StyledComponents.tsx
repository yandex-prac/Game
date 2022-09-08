import styled from 'styled-components'
import variables from '../../../Variables.module.scss'
import { ContainerProps } from './types'

const Container = styled.div<ContainerProps>`
  z-index: 1;
  box-sizing: border-box;
  min-height: 100vh;
  width: 257px;
  ${({ darkMode }) => !darkMode && `box-shadow: ${variables.shadowSoft000};`}
  border-right: 1px solid ${({ darkMode }) =>
    darkMode ? variables.black300 : variables.white000};
  padding-bottom: 17px;
  display: flex;
  flex-direction: column;
  grid-row: 1/-3;
  background-color: ${({ darkMode }) =>
    darkMode ? variables.black200 : variables.white000};
  transition: 0.3s background-color, 0.3s border-color, 0.3s box-shadow;
`

const Img = styled.img`
  max-width: 28px;
  object-fit: cover;
  object-position: center;
  margin: 10px 0 8px 24px;
`

export { Container, Img }
