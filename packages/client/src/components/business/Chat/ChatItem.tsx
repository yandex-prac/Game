import React from 'react'
import {
  ChatItemDate,
  ChatItemImage,
  ChatItemStyle,
  ChatItemTitle,
} from './StyledComponents'
import { ChatItemType } from './types'

export const ChatItem = ({
  name = 'WakaWaka',
  image = 'https://image.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg',
  text = '06/09',
}: ChatItemType) => {
  return (
    <ChatItemStyle>
      <div>
        <ChatItemImage>
          <img src={image} alt="Аватар" />
        </ChatItemImage>
      </div>
      <div>
        <ChatItemTitle>{name}</ChatItemTitle>
        <ChatItemDate>{text}</ChatItemDate>
      </div>
    </ChatItemStyle>
  )
}
