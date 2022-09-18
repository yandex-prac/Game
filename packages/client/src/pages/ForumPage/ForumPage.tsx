import React, { memo } from 'react'
import { ChatItem } from './ChatItem'
import { MessagesList } from './MessagesList'
import {
  ForumChatListBlock,
  ForumPageTitle,
  ForumPageWrapper,
  ForumPageLeftBlock,
  ForumPageRightBlock,
  RegularBtn,
} from './StyledComponents'
import { BaseLayout } from '../../components'

export const ForumPage = memo(() => {
  // Заменить мок на данные с сервера.
  const messagesMock = ['message1', 'message2']
  return (
    <BaseLayout>
      <ForumPageWrapper>
        <ForumPageLeftBlock>
          <ForumPageTitle>Чаты</ForumPageTitle>
          <ForumChatListBlock>
            <ChatItem
              name={'WakaWaka'}
              text={'Some text'}
              image={
                'https://image.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg'
              }
            />
            <RegularBtn>Создать чат</RegularBtn>
          </ForumChatListBlock>
        </ForumPageLeftBlock>
        <ForumPageRightBlock>
          <MessagesList
            arrayOfMessages={messagesMock}
            isEmpty={!!messagesMock.length}
          />
        </ForumPageRightBlock>
      </ForumPageWrapper>
    </BaseLayout>
  )
})
