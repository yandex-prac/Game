import styled from 'styled-components'
import variables from '@/Variables.module.scss'
import { DarkModeType } from '@/types'

const Icon = styled.svg<DarkModeType>`
  fill: ${({ darkMode }) => (darkMode ? variables.grey200 : variables.grey000)};
  transition: 0.3s fill;
`

export { Icon }
