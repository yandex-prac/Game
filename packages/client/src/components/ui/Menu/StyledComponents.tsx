import styled from 'styled-components'
import variables from '../../../Variables.module.scss'

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const Icon = styled.svg`
  fill: ${variables.grey000};
`

export { List, Icon }
