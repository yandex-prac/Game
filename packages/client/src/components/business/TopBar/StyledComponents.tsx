import styled from 'styled-components'
import variables from '../../../Variables.module.scss'
import { WrapperProps, ButtonProps, IconProps } from './types'

const Wrapper = styled.div<WrapperProps>`
  z-index: 1;
  min-height: 60px;
  ${({ darkMode }) => !darkMode && `box-shadow: ${variables.shadowSoft000};`}
  border-bottom: 1px solid ${({ darkMode }) =>
    darkMode ? variables.black300 : variables.white000};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 36px;
  background-color: ${({ darkMode }) =>
    darkMode ? variables.black200 : variables.white000};
  transition: 0.3s background-color, 0.3s border-color;
`

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  width 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  left: 0;

  ::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ darkMode }) =>
      darkMode ? variables.purple100 : variables.blue100};
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 0.3s opacity;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover svg {
    fill: ${({ darkMode }) =>
      darkMode ? variables.purple000 : variables.blue000};
  }
`

const Icon = styled.svg<IconProps>`
  z-index: 1;
  fill: ${({ darkMode }) => (darkMode ? variables.grey200 : variables.grey000)};
  transition: 0.3s fill;
`

export { Wrapper, Button, Icon }
