import styled from 'styled-components'
import variables from '../../../Variables.module.scss'

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const MenuItem = styled.li`
  list-style: none;

  a {
    padding: 13px 25px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 20px;
    transition: 0.3s background-color;
  }

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

const Icon = styled.svg`
  fill: ${variables.grey000};
`

export { List, MenuItem, Icon, Text }
