import styled from 'styled-components'
import variables from '@/Variables.module.scss'

export const ForumPageWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${variables.white000};
  border-radius: 4px;
  height: 100%;
`

export const ForumPageTitle = styled.div`
  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: ${variables.black000};
  border-bottom: 1px solid ${variables.grey100};
  padding: 23px 24px 18px;
`
export const ForumPageLeftBlock = styled.div`
  box-shadow: ${variables.shadowSoft000};
  width: 320px;
  flex: 0 0 320px;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`
export const ForumPageRightBlock = styled.div`
  box-shadow: ${variables.shadowSoft000};
  flex: 1 1 320px;
  border-radius: 4px;
`
export const ForumChatListBlock = styled.div`
  padding: 30px 0px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`
export const ForumPageButtonBlock = styled.div`
  margin: auto auto -14px;
`
