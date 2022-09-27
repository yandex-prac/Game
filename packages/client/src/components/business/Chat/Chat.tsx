import React from 'react'
import { Message } from '@/components'
import { ChatBlock, ChatEmpty } from './StyledComponents'
import { ChatProps } from './types'
import { useCustomIntl } from '@/hooks'
import { randomId } from '@/utils'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '@/components'

export const Chat = ({ arrayOfMessages, isEmpty }: ChatProps) => {
  if (isEmpty) {
    return <ChatEmpty>{useCustomIntl('EMPTY_MESSAGES')}</ChatEmpty>
  }
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ChatBlock>
        {arrayOfMessages.map(item => (
          <Message key={randomId()} text={item} />
        ))}
      </ChatBlock>
    </ErrorBoundary>
  )
}
