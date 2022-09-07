import styled from 'styled-components'
import variables from '../../../Variables.module.scss'

const List = styled.ul`
  padding: 0;
  margin: 0 25px;
  display: flex;
  flex-direction: column;
  gap: 26px;
`

const MenuItem = styled.li`
  list-style: none;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 20px;
  }
`

const Text = styled.span`
  font-size: 14px;
  color: ${variables.black000};
  font-weight: 500;
  line-height: 13px;
`

const Icon = styled.svg`
  fill: ${variables.grey000};
`

export { List, MenuItem, Icon, Text }
