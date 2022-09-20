import styled from 'styled-components'
import variables from '@/Variables.module.scss'

export const ChatItemStyle = styled.div`
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

export const ChatItemTitle = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 1;
  color: ${variables.black000};
  margin-bottom: 4px;
`

export const ChatItemDate = styled.div`
  font-weight: 500;
  font-size: 11px;
  line-height: 1;
  color: ${variables.grey111};
`

export const ChatItemImage = styled.div`
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

export const ChatEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  color: ${variables.grey111};
  height: 100%;
`
export const ChatBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
