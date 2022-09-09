import React from 'react'
import {
  ChatItemDate,
  ChatItemImage,
  ChatItemRight,
  ChatItemStyle,
  ChatItemTitle
} from './StyledComponents'

type ChatItemType = { name: string, image: string, text: string }

export const ChatItem = ({
                           name = 'WakaWaka',
                           image = 'https://image.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg',
                           text = '06/09'
                         }: ChatItemType) => {
  return (
    <ChatItemStyle>
      <div>
        <ChatItemImage>
          <img src={image} alt='Avatar' className='chat-item__img' />
        </ChatItemImage>
      </div>
      <ChatItemRight>
        <ChatItemTitle>{name}</ChatItemTitle>
        <ChatItemDate>{text}</ChatItemDate>
      </ChatItemRight>
    </ChatItemStyle>
  )
}
