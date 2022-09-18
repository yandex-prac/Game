import styled from 'styled-components'
import variables from '../../Variables.module.scss'

const ForumPageWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  //max-width: 884px;
  display: flex;
  justify-content: space-between;
  background: ${variables.white000};
  border-radius: 4px;
  height: 100%;
  //margin: 0 auto;
`

const ForumPageTitle = styled.div`
  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: ${variables.black000};
  border-bottom: 1px solid ${variables.grey000};
  padding: 22px 26px 18px;
`
const ForumPageLeftBlock = styled.div`
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 320px;
  flex: 0 0 320px;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
`
const ForumPageRightBlock = styled.div`
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  flex: 1 1 320px;
`
const ForumChatListBlock = styled.div`
  padding: 30px 0px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const ChatItemStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  align-items: center;
  margin-bottom: 25px;
  transition: 0.3s;
  padding: 0 23px;

  &:hover {
    background-color: rgb(0 0 0 / 5%);
  }
`
const ChatItemRight = styled.div``

const ChatItemTitle = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 1;
  color: ${variables.black000};
  margin-bottom: 4px;
`

const ChatItemDate = styled.div`
  font-weight: 500;
  font-size: 11px;
  line-height: 1;
  color: ${variables.grey111};
`

const ChatItemImage = styled.div`
  margin-right: 12px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
`
// Надо перенести потом куда-то в общий
const RegularBtn = styled.button`
  background-color: ${variables.blue000};
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: ${variables.white000};
  cursor: pointer;
  border: none;
  width: 100%;
  max-width: 268px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  margin-top: auto;

  &:hover {
    opacity: 0.8;
  }
`

const MessagesListEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  color: ${variables.grey111};
  height: 100%;
`
const MessagesListBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const MessageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export {
  ForumPageWrapper,
  ForumPageTitle,
  ChatItemStyle,
  ChatItemTitle,
  ChatItemDate,
  ForumChatListBlock,
  ChatItemImage,
  ForumPageLeftBlock,
  ForumPageRightBlock,
  RegularBtn,
  MessagesListEmpty,
  MessagesListBlock,
  ChatItemRight,
  MessageStyle,
}
