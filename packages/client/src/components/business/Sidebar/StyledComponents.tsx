import styled from 'styled-components'
import variables from '../../../Variables.module.scss'

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  width: 257px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding-bottom: 17px;
  display: flex;
  flex-direction: column;
`

const Img = styled.img`
  max-width: 28px;
  object-fit: cover;
  object-position: center;
  margin: 10px 0 8px 24px;
`

export { Container, Img }
