import React from 'react'
import {
  CommentItemStyle,
  CommentAuthorStyle,
  CommentCreatedAtStyle,
  CommentContentStyle,
  CommentIsUpdatedStyle,
} from './StyledComponents'
import { CommentItemProps } from './types'
import { useCustomIntl } from '@/hooks'

export const Comment = ({ comment }: CommentItemProps) => {
  const { content, author, createdAt, isUpdated } = comment
  return (
    <CommentItemStyle>
      <CommentAuthorStyle>{author}</CommentAuthorStyle>
      <CommentCreatedAtStyle>{createdAt}</CommentCreatedAtStyle>
      <CommentContentStyle>{content}</CommentContentStyle>
      <CommentIsUpdatedStyle>{isUpdated && 'изменено'}</CommentIsUpdatedStyle>
    </CommentItemStyle>
  )
}
