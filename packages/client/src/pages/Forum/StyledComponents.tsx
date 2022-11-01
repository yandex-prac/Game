import styled from 'styled-components'
import variables from '@/Variables.module.scss'

const ForumPageWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${variables.white000};
  border-radius: 4px;
  height: 100%;
  max-height: 838px;
`

const ForumPageTitle = styled.div`
  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: ${variables.black000};
  border-bottom: 1px solid ${variables.grey100};
  padding: 23px 24px 18px;
`
const ForumPageLeftBlock = styled.div`
  box-shadow: ${variables.shadowSoft000};
  width: 320px;
  flex: 0 0 320px;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow-y: auto;
`
const ForumPageRightBlock = styled.div`
  box-shadow: ${variables.shadowSoft000};
  flex: 1 1 320px;
  border-radius: 4px;
`
const ForumChatListBlock = styled.div`
  padding: 30px 0px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`
const ForumPageButtonBlock = styled.div`
  margin: auto auto -14px;
`

const InputGroup = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  height: 30px;
  position: relative;
  padding-bottom: 24px;

  &:last-of-type {
    flex-grow: 1;
  }
`

export {
  ForumPageWrapper,
  ForumPageTitle,
  ForumPageLeftBlock,
  ForumPageRightBlock,
  ForumChatListBlock,
  ForumPageButtonBlock,
  InputGroup,
}
