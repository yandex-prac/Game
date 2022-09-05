import styled from 'styled-components'
import { InputGroupProps, LoginFormProps } from './types'

const LoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 340px;
  height: 450px;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.14);
  border-radius: 12px;
`

const Title = styled.h2`
  margin-bottom: 50px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`

const LoginForm = styled.form<LoginFormProps>`
  display: flex;
  flex-direction: column;
`

const InputGroup = styled.div<InputGroupProps>`
  height: 30px;
  position: relative;
  padding-bottom: 24px;
  margin-bottom: ${({ lastGroup }) => (lastGroup ? '160px' : '0px')};
`

export { LoginPage, InputGroup, Layout, LoginForm, Title }
