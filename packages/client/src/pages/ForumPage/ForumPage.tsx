import React from 'react'
import { ChatItem } from './ChatItem'
import { MessagesList } from './MessagesList'
import {
  ForumChatListBlock,
  ForumPageTitle,
  ForumPageTitleBlock,
  ForumPageWrapper,
  ForumChatListItem,
  ForumPageLeftBlock,
  ForumPageRightBlock,
  ForumChatListBtn,
  RegularBtn,
} from './StyledComponents'

export const ForumPage = () => {
  // Заменить мок на данные с сервера.
  const messagesMock = ['message1', 'message2']
  return (
    <ForumPageWrapper>
      <ForumPageLeftBlock>
        <ForumPageTitleBlock>
          <ForumPageTitle>Чаты</ForumPageTitle>
        </ForumPageTitleBlock>
        <ForumChatListBlock>
          <ForumChatListItem>
            <ChatItem
              name={'WakaWaka'}
              text={'Some text'}
              image={
                'https://image.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg'
              }
            />
          </ForumChatListItem>
        </ForumChatListBlock>
        <ForumChatListBtn>
          <RegularBtn>Создать чат</RegularBtn>
        </ForumChatListBtn>
      </ForumPageLeftBlock>
      <ForumPageRightBlock>
        <MessagesList
          arrayOfMessages={messagesMock}
          isEmpty={!!messagesMock.length}
        />
      </ForumPageRightBlock>
    </ForumPageWrapper>
  )
}
