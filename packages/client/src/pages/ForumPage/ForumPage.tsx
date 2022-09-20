import React, { memo } from 'react'
import { ChatItem } from '@/components/business/Chat/ChatItem'
import { Chat } from '@/components/business/Chat/Chat'
import {
  ForumChatListBlock,
  ForumPageTitle,
  ForumPageWrapper,
  ForumPageLeftBlock,
  ForumPageRightBlock,
  ForumPageButtonBlock,
} from './StyledComponents'
import { BaseLayout, Button } from '@/components'

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
            <ForumPageButtonBlock>
              <Button type={'button'} textIntl={'CREATE_CHAT'} />
            </ForumPageButtonBlock>
          </ForumChatListBlock>
        </ForumPageLeftBlock>
        <ForumPageRightBlock>
          <Chat
            arrayOfMessages={messagesMock}
            isEmpty={!!messagesMock.length}
          />
        </ForumPageRightBlock>
      </ForumPageWrapper>
    </BaseLayout>
  )
})
