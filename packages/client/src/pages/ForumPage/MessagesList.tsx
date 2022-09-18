import React from 'react'
import { Message } from './Message'
import { MessagesListBlock, MessagesListEmpty } from './StyledComponents'
import { MessagesListType } from './types'

export const MessagesList = ({
  arrayOfMessages,
  isEmpty,
}: MessagesListType) => {
  if (isEmpty) {
    return (
      <MessagesListEmpty>
        Выберите чат чтобы отправить сообщение
      </MessagesListEmpty>
    )
  }
  return (
    <MessagesListBlock>
      {arrayOfMessages.map((item, index) => (
        <Message key={index} text={item} />
      ))}
    </MessagesListBlock>
  )
}
