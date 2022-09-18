import React from 'react'
import { Message } from '../Message/Message'
import { ChatBlock, ChatEmpty } from './StyledComponents'
import { ChatType } from './types'
import { useCustomIntl } from '@/hooks'

export const Chat = ({ arrayOfMessages, isEmpty }: ChatType) => {
  if (isEmpty) {
    return <ChatEmpty>{useCustomIntl('EMPTY_MESSAGES')}</ChatEmpty>
  }
  const randomId = () => (Math.random() + 1).toString(36).substring(7)
  return (
    <ChatBlock>
      {arrayOfMessages.map((item, index) => (
        <Message key={randomId()} text={item} />
      ))}
    </ChatBlock>
  )
}
