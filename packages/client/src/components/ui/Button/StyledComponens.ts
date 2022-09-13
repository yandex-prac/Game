import styled from 'styled-components'
import variables from '@/Variables.module.scss'
import { ButtonProps } from './types'

export const StyledButton = styled.button<ButtonProps>`
  width: 280px;
  height: 37px;
  margin-top: ${({ margintop }) => margintop}px;
  margin-bottom: 14px;
  color: ${variables.white000};
  background-color: ${variables.blue000};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.3s opacity;

  &:hover {
    opacity: 0.8;
  }
`
