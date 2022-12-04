import React from 'react'
import { MessageStyle } from './StyledComponents'
import { MessageProps } from './types'

export const Message = ({ text, author }: MessageProps) => {
  return (
    <MessageStyle>
      <span style={{ fontSize: '12px', color: 'grey' }}>{author} </span>
      <p style={{ margin: '0' }}>{text}</p>
    </MessageStyle>
  )
}
