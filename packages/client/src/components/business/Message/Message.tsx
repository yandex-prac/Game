import React from 'react'
import { MessageStyle } from './StyledComponents'
import { MessageProps } from './types'

export const Message = ({ text }: MessageProps) => {
  return <MessageStyle>{text}</MessageStyle>
}
