import styled from 'styled-components'
import variables from '@/Variables.module.scss'
import { DarkModeType, ProfileProps } from '@/types'

const ProfilePage = styled.div<DarkModeType & ProfileProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  label,
  input,
  span {
    color: ${({ darkMode }) =>
      darkMode ? variables.white100 : variables.black000};
    transition: 0.3s color;
  }

  li {
    border-bottom: 1px solid
      ${({ darkMode }) => (darkMode ? variables.grey400 : variables.grey300)};
    transition: 0.3s border-color;

    &:hover {
      ${({ isNotDisabled, darkMode }) =>
        isNotDisabled &&
        `border-color: ${darkMode ? variables.purple000 : variables.blue000}`}
    }
  }

  label {
    ${({ isNotDisabled }) => isNotDisabled && `cursor: text;`}
  }

  button {
    color: ${({ darkMode }) =>
      darkMode ? variables.black000 : variables.white000};
    background-color: ${({ darkMode }) =>
      darkMode ? variables.purple000 : variables.blue000};
    transition: 0.3s color, 0.3s background-color, 0.3s opacity;
  }
`

const ProfileForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ProfileUl = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ProfileLi = styled.li`
  display: flex;
  list-style: none;
  justify-content: space-between;
  width: 510px;
  line-height: 33px;

  &:last-child {
    border-bottom: none;

    &:hover {
      border-bottom: none;
    }
  }

  transition: 0.3s border-bottom;
`

const ProfileLabel = styled.label`
  width: 100%;
  font-size: 13px;
`

const ProfileInput = styled.input`
  padding: 0;
  background-color: transparent;
  line-height: 33px;
  outline: none;
  border: none;
  text-align: right;
  width: 100%;
  font-size: 13px;
`

const Error = styled.span`
  margin-top: 7px;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: ${variables.red000}!important;
  user-select: none;

  &:hover {
    visible: none;
  }
`

const WrapButtons = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`

export {
  ProfilePage,
  ProfileForm,
  ProfileUl,
  ProfileLi,
  ProfileLabel,
  ProfileInput,
  Error,
  WrapButtons,
}
