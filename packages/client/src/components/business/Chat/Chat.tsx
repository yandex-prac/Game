import React from 'react'
import { Message } from '@/components'
import { ChatBlock, ChatEmpty } from './StyledComponents'
import { ChatProps } from './types'
import { useCustomIntl } from '@/hooks'
import { randomId } from '@/utils'

export const Chat = ({ arrayOfMessages, isEmpty }: ChatProps) => {
  if (isEmpty) {
    return <ChatEmpty>{useCustomIntl('EMPTY_MESSAGES')}</ChatEmpty>
  }
  return (
    <ChatBlock>
      {arrayOfMessages.map(item => (
        <Message key={randomId()} text={item} />
      ))}
    </ChatBlock>
  )
}