import styled from 'styled-components'
import variables from '../../../Variables.module.scss'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  color: ${variables.blue000};
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s opacity;

  &:hover {
    opacity: 0.8;
  }
`
