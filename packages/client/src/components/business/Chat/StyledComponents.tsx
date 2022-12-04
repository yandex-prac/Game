import styled from 'styled-components'
import variables from '@/Variables.module.scss'

const ChatEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  color: ${variables.grey200};
  height: 100%;
`
const ChatBlock = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
`

const ChatInput = styled.input`
  position: absolute;
  background-color: ${variables.white000};
  outline: none;
  border: none;
  border-bottom: 2px solid ${variables.blue000};
  bottom: 50px;
  height: 30px;
  width: 30vw;

  &:hover {
    opacity: 0.8;
  }
`

const ChatButton = styled.button`
  position: absolute;
  font-size: 13px;
  background-color: ${variables.blue000};
  border: none;
  border-radius: 10px;
  bottom: 50px;
  right: 30px;
  width: 100px;
  height: 30px;

  &:hover {
    opacity: 0.8;
  }
`

export { ChatEmpty, ChatBlock, ChatInput, ChatButton }
