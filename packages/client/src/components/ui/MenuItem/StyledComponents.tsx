import styled from 'styled-components'
import variables from '../../../Variables.module.scss'
import { ItemProps } from './types'

const Item = styled.li<ItemProps>`
  list-style: none;

  a {
    padding: 13px 25px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 20px;
    transition: 0.3s background-color;
  }

  ${({ isActive }) =>
    isActive &&
    `
      span {
        color: ${variables.blue000};
      }

      svg {
        fill: ${variables.blue000};
      }
    `}

  a:hover {
    background-color: ${variables.blue100};
  }

  &:nth-child(5) {
    margin-bottom: 20px;
  }

  &:nth-child(6) {
    border-top: 1px solid ${variables.grey100};
    padding-top: 20px;
    flex-grow: 1;
  }
`

const Text = styled.span`
  font-size: 14px;
  color: ${variables.black000};
  font-weight: 500;
  line-height: 13px;
`

const Button = styled.button`
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
    background-color: ${variables.blue100};
  }
`

export { Item, Button, Text }
