import styled from 'styled-components'
import variables from '../../../Variables.module.scss'

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  width: 257px;
  box-shadow: ${variables.shadowSoft000};
  padding-bottom: 17px;
  display: flex;
  flex-direction: column;
  grid-row: 1/-3;
`

const Img = styled.img`
  max-width: 28px;
  object-fit: cover;
  object-position: center;
  margin: 10px 0 8px 24px;
`

export { Container, Img }
