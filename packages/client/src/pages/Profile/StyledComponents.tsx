import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variables from '@/Variables.module.scss'
import { DarkModeType } from '@/types'

const ProfilePage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const ProfileUl = styled.ul<DarkModeType>`
  margin: 0;
  padding: 0;
  margin-bottom: 60px;

  label,
  span {
    color: ${({ darkMode }) =>
      darkMode ? variables.white100 : variables.black000};
    transition: 0.3s color;
  }

  li {
    border-bottom: 1px solid
      ${({ darkMode }) => (darkMode ? variables.grey400 : variables.grey300)};
    transition: 0.3ss border-color;
  }

  li:hover {
    border-color: ${({ darkMode }) =>
      darkMode ? variables.purple000 : variables.blue000};
  }
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

const ProfileGroupLink = styled.div<DarkModeType>`
  display: flex;
  flex-direction: column;

  a {
    color: ${({ darkMode }) =>
      darkMode ? variables.purple000 : variables.blue000};
    border-bottom: 1px solid
      ${({ darkMode }) => (darkMode ? variables.grey400 : variables.grey300)};
    transition: 0.3s border-color, 0.3s opacity;
  }

  a:hover {
    border-color: ${({ darkMode }) =>
      darkMode ? variables.purple000 : variables.blue000};
  }

  a:hover:last-of-type {
    opacity: 0.8;
  }
`

const ProfileLink = styled(Link)`
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s opacity;
  line-height: 33px;
  width: 510px;
  text-decoration: none;
  transition: 0.3s border-bottom;

  &:last-child {
    color: ${variables.red000};
    border-bottom: none;
  }
`

const ProfileSpan = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${variables.grey200};
`

const ProfileName = styled.p<DarkModeType>`
  font-size: 16px;
  color: ${({ darkMode }) =>
    darkMode ? variables.white100 : variables.black000};
  margin: 0 0 60px;
  transition: 0.3s color;
`

const ProfileLabel = styled.label`
  font-size: 13px;
  color: 
  font-weight: 500;
`
export {
  ProfilePage,
  ProfileGroupLink,
  ProfileName,
  ProfileUl,
  ProfileLi,
  ProfileLabel,
  ProfileSpan,
  ProfileLink,
}
