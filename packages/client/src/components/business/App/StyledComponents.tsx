import styled from 'styled-components'
import variables from '@/Variables.module.scss'

const Wrap = styled.div`
  box-sizing: border-box;
  font-family: ${variables.fontFamily};
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  min-height: 100vh;
`

export { Wrap }
