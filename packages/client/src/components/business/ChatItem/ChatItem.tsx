import React from 'react'
import {
  ChatItemDate,
  ChatItemImage,
  ChatItemStyle,
  ChatItemTitle,
} from './StyledComponents'
import { ChatItemProps } from './types'
import { useCustomIntl } from '@/hooks'

export const ChatItem = ({
  name = 'WakaWaka',
  image = 'https://image.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg',
  text = '06/09',
}: ChatItemProps) => {
  return (
    <ChatItemStyle>
      <ChatItemImage src={image} alt={useCustomIntl('LOGO_ALT')} />

      <div>
        <ChatItemTitle>{name}</ChatItemTitle>
        <ChatItemDate>{text}</ChatItemDate>
      </div>
    </ChatItemStyle>
  )
}
