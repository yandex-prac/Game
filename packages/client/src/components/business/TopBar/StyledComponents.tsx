import styled from 'styled-components'
import variables from '../../../Variables.module.scss'

const Wrapper = styled.div`
  min-height: 60px;
  box-shadow: ${variables.shadowSoft000};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 36px;
`

const Button = styled.button`
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
    background-color: ${variables.blue100};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    transition: 0.3s opacity;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover svg {
    fill: ${variables.blue000};
  }
`

const Icon = styled.svg`
  fill: ${variables.grey000};
  transition: 0.3s fill;
`

export { Wrapper, Button, Icon }
