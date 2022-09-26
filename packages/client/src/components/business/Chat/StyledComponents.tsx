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
  flex-direction: column;
  justify-content: flex-end;
`

export { ChatEmpty, ChatBlock }
