import React from 'react'
import {
  ChatItemDate,
  ChatItemImage,
  ChatItemStyle,
  ChatItemTitle,
} from './StyledComponents'
import { ChatItemProps } from './types'
import { useCustomIntl } from '@/hooks'

// name = 'WakaWaka',
//   image = 'https://image.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg',
//   text = '06/09',

export const ChatItem = ({ topic }: ChatItemProps) => {
  const { title, author } = topic
  return (
    <ChatItemStyle>
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
