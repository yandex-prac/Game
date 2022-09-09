import styled from 'styled-components';
import { FormProps } from '../../types/types'
import { Button } from '../ui/Button/Button'
import { Link } from '../ui/Link/Link'

export const AuthPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`

export const AuthLayout = styled.div<{ maxheight: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  max-width: 340px;
  max-height: ${({ maxheight }) => maxheight }px;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.14);
  border-radius: 12px;
`

export const AuthTitle = styled.h2`
  margin: 0 0 50px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`

export const AuthForm = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
`

export const AuthBtn = styled(Button)<{ margintop: number }>`
  margin-top: ${({ margintop }) => margintop }px;
`

export const AuthLink = styled(Link)`
  text-align: center;
`
