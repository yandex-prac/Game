import styled from 'styled-components'
import { FormProps } from '../../../types/types'
import { Button } from '../../ui/Button/Button'
import { Link } from '../../ui/Link/Link'
import variables from '../../../Variables.module.scss'
import { AuthBtnProps } from './types'

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
  max-height: ${({ maxheight }) => maxheight}px;
  background-color: ${variables.white000};
  box-shadow: ${variables.shadowSoft000};
  border-radius: 12px;
`

export const AuthTitle = styled.h2`
  margin: 0 0 50px;
  font-size: 20px;
  font-weight: 500;
`

export const AuthForm = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
`

export const AuthBtn = styled(Button)<AuthBtnProps>`
  margin-top: ${({ margintop }) => margintop}px;
`

export const AuthLink = styled(Link)`
  text-align: center;
`
