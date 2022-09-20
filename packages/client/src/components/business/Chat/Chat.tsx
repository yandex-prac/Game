import React from 'react'
import { Message } from '@/components'
import { ChatBlock, ChatEmpty } from './StyledComponents'
import { ChatType } from './types'
import { useCustomIntl } from '@/hooks'
import { randomId } from '@/utils/randomId'

export const Chat = ({ arrayOfMessages, isEmpty }: ChatType) => {
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
