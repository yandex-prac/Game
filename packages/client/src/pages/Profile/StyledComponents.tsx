import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variables from '../../Variables.module.scss'

export const ProfilePage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const ProfileUl = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 60px;
`

export const ProfileLi = styled.li`
  display: flex;
  justify-content: space-between;
  width: 510px;
  border-bottom: 1px solid ${variables.grey300};
  line-height: 33px;

  &:last-child {
    border-bottom: none;

    &:hover {
      border-bottom: none;
    }
  }

  transition: 0.3s border-bottom;

  &:hover {
    border-bottom: 1px solid ${variables.blue000};
  }
`

export const ProfileGroupLink = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(Link)`
  color: ${variables.blue000};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s opacity;
  line-height: 33px;
  border-bottom: 1px solid ${variables.grey300};
  width: 510px;
  text-decoration: none;

  &:last-child {
    color: ${variables.red000};
    border-bottom: none;

    &:hover {
      border-bottom: none;
    }
  }

  &:hover {
    opacity: 0.8;
    border-bottom: 1px solid ${variables.blue000};
  }
`

export const ProfileSpan = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${variables.grey200};
`

export const ProfileName = styled.p`
  font-size: 16px;
  font-style: normal;
  margin: 0 0 60px;
`

export const ProfileLabel = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: ${variables.black000};
`
