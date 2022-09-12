import styled from 'styled-components'
import variables from '@/Variables.module.scss'
import { DarkModeType } from '@/types'

const Page = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 257px 1fr;
`

const Inner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main<DarkModeType>`
  padding: 38px 30px;
  height: 100%;
  background-color: ${({ darkMode }) =>
    darkMode ? variables.black400 : variables.white000};
  transition: 0.3s background-color;
`

export { Page, Inner, Main }
