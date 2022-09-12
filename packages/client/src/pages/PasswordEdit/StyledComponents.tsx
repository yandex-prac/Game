import styled from 'styled-components'
import variables from '../../Variables.module.scss'

export const ProfilePage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 97px;
  }
`
export const PasswordForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ProfileName = styled.p`
  font-size: 16px;
  font-style: normal;
  margin-bottom: 60px;
`

export const ProfileUl = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 60px;
`

export const ProfileLi = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 510px;
  border-bottom: 1px solid ${variables.grey300};
  transition: 0.3s border-bottom;

  &:hover {
    border-bottom: 1px solid ${variables.blue000};
  }
`

export const ProfileLabel = styled.label`
  top: 10px;
  position: absolute;
  font-size: 13px;
  color: ${variables.black000};
`

export const ProfileInput = styled.input`
  padding: 0;
  line-height: 33px;
  outline: none;
  border: none;
  text-align: right;
  width: 100%;
`

export const Error = styled.span`
  margin-top: 7px;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: ${variables.red000};
  user-select: none;
`
