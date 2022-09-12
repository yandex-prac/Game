import React from 'react'

export const Message = ({ text }: { text: string }) => {
  return <div className={'messages'}>{text}</div>
}
