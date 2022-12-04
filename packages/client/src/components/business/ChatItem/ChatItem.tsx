import React from 'react'
import {
  ChatItemDate,
  ChatItemImage,
  ChatItemStyle,
  ChatItemTitle,
} from './StyledComponents'
import { ChatItemProps } from './types'
import { useCustomIntl } from '@/hooks'

export const ChatItem = ({ topic, getTopicId }: ChatItemProps) => {
  const { title, author } = topic

  return (
    <ChatItemStyle onClick={getTopicId}>
      <ChatItemImage
        src="https://source.unsplash.com/random"
        alt={useCustomIntl('LOGO_ALT')}
      />

      <div>
        <ChatItemTitle>{title}</ChatItemTitle>
        <ChatItemDate>{author}</ChatItemDate>
      </div>
    </ChatItemStyle>
  )
}
