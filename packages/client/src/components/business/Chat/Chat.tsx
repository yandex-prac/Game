import React, { useState } from 'react'
import { Message } from '@/components'
import { ChatBlock, ChatEmpty, ChatInput, ChatButton } from './StyledComponents'
import { ChatProps } from './types'
import { useCustomIntl } from '@/hooks'
import { randomId } from '@/utils'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '@/components'

export const Chat = ({ arrayOfMessages, sendMess }: ChatProps) => {
  const [message, setMessage] = useState('')
  if (!arrayOfMessages) {
    return <ChatEmpty>{useCustomIntl('EMPTY_MESSAGES')}</ChatEmpty>
  } else {
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ChatBlock>
          {arrayOfMessages?.map((item: any) => (
            <Message
              key={randomId()}
              author={item.author}
              text={item.content}
            />
          ))}
        </ChatBlock>
        <ChatInput
          placeholder="Введите сообщение..."
          value={message}
          onChange={(event: any) => {
            setMessage(event.target.value)
          }}></ChatInput>
        <ChatButton
          onClick={() => {
            sendMess(message), setMessage('')
          }}>
          Отправить
        </ChatButton>
      </ErrorBoundary>
    )
  }
}
