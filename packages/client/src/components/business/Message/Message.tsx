import React from 'react'
import { MessageStyle } from './StyledComponents'
import { MessageType } from './types'

export const Message = ({ text }: MessageType) => {
  return <MessageStyle>{text}</MessageStyle>
}
