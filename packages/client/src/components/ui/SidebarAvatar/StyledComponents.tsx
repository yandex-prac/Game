import styled from 'styled-components'
import variables from '../../../Variables.module.scss'
import { WrapperProps } from './types'

const Wrapper = styled.div<WrapperProps>`
  padding: 24px 24px 0;
  margin-bottom: 40px;
  border-top: 1px solid
    ${({ darkMode }) => (darkMode ? variables.black300 : variables.grey100)};
  display: flex;
  align-items: center;
  gap: 17px;
  transition: 0.3s border-color;
`

const Avatar = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`

const UserName = styled.p`
  margin: 0 0 5px;
  font-size: 13px;
  color: ${variables.black000};
  font-weight: 500;
  line-height: 13px;
`

const UserEmail = styled.p`
  margin: 0;
  font-size: 11px;
  color: ${variables.grey000};
  font-weight: 400;
  line-height: 11px;
`

export { Wrapper, Avatar, UserName, UserEmail }
