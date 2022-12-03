import styled from 'styled-components'
import variables from '@/Variables.module.scss'
const ChatItemStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  align-items: center;
  margin-bottom: 25px;
  transition: 0.3s;
  padding: 0 23px;
  &:hover {
    background-color: ${variables.black500};
  }
`

const ChatItemTitle = styled.div`
  font-weight: bold;
  font-size: 15px;
  line-height: 1;
  color: ${variables.grey400};
  margin-bottom: 6px;
`

const ChatItemDate = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  color: ${variables.grey200};
`

const ChatItemImage = styled.img`
  margin-right: 12px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  object-fit: cover;
  object-position: center;
`
export { ChatItemDate, ChatItemImage, ChatItemStyle, ChatItemTitle }
