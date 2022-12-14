import styled from 'styled-components'
import { FormProps } from '@/types'
import variables from '@/Variables.module.scss'
import { AuthLayoutProps } from './types'

const AuthPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`

const AuthLayout = styled.div<AuthLayoutProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  max-width: 340px;
  max-height: ${({ maxheight }) => maxheight}px;
  background-color: ${variables.white000};
  box-shadow: ${variables.shadowSoft000};
  border-radius: 12px;
`

const AuthTitle = styled.h2`
  margin: 0 0 50px;
  font-size: 20px;
  font-weight: 500;
`

const AuthForm = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
`

export { AuthPage, AuthLayout, AuthTitle, AuthForm }
