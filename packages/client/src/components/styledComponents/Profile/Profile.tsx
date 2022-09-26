import styled from 'styled-components'
import variables from '@/Variables.module.scss'

const ProfilePage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 97px;
  }
`

const ProfileForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ProfileName = styled.p`
  font-size: 16px;
  margin-bottom: 60px;
`

const ProfileUl = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 60px;
`

const ProfileLi = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 510px;
  border-bottom: 1px solid ${variables.grey300};
  transition: 0.3s border-bottom;

  &:hover {
    border-bottom: 1px solid ${variables.blue000};
  }
`

const ProfileLabel = styled.label`
  cursor: text;
  top: 10px;
  position: absolute;
  font-size: 13px;
  color: ${variables.black000};
`

const ProfileInput = styled.input`
  padding: 0;
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
  color: ${variables.red000};
  user-select: none;

  &:hover {
    visible: none;
  }
`
export {
  ProfilePage,
  ProfileForm,
  ProfileName,
  ProfileUl,
  ProfileLi,
  ProfileLabel,
  ProfileInput,
  Error,
}
