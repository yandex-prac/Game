import styled from 'styled-components'
import variables from '../../../Variables.module.scss'
import { ItemProps, ButtonProps, TextProps } from './types'

const Item = styled.li<ItemProps>`
  list-style: none;
  border-left: 3px solid transparent;

  a {
    padding: 13px 25px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 17px;

    transition: 0.3s background-color;
  }

  ${({ isActive, darkMode }) =>
    isActive &&
    `
      span {
        color: ${darkMode ? variables.purple000 : variables.blue000};
      }

      svg {
        fill: ${darkMode ? variables.purple000 : variables.blue000};
      }

      border-left: 3px solid ${
        darkMode ? variables.purple000 : variables.blue000
      };
    `}

  a:hover {
    background-color: ${({ darkMode }) =>
      darkMode ? variables.purple100 : variables.blue100};
  }

  &:nth-child(5) {
    margin-bottom: 20px;
  }

  &:nth-child(6) {
    border-top: 1px solid
      ${({ darkMode }) => (darkMode ? variables.black300 : variables.grey100)};
    padding-top: 20px;
    flex-grow: 1;
  }

  transition: 0.3s border-color;
`

const Text = styled.span<TextProps>`
  font-size: 14px;
  color: ${({ darkMode }) =>
    darkMode ? variables.white100 : variables.black000};
  font-weight: 500;
  line-height: 13px;
`

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  background-color: transparent;
  width: 100%;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 25px;
  transition: 0.3s background-color;

  &:hover {
    background-color: ${({ darkMode }) =>
      darkMode ? variables.purple100 : variables.blue100};
  }
`

export { Item, Button, Text }
