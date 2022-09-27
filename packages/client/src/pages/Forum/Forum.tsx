import React, { memo } from 'react'
import {
  ForumChatListBlock,
  ForumPageTitle,
  ForumPageWrapper,
  ForumPageLeftBlock,
  ForumPageRightBlock,
  ForumPageButtonBlock,
} from './StyledComponents'
import { BaseLayout, Button, Chat, ChatItem } from '@/components'
import { useCustomIntl } from '@/hooks'

export const Forum = memo(() => {
  // Заменить мок на данные с сервера.
  const messagesMock = ['message1', 'message2']
  return (
    <BaseLayout>
      <ForumPageWrapper>
        <ForumPageLeftBlock>
          <ForumPageTitle> {useCustomIntl('CHATS')}</ForumPageTitle>
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
          <Chat arrayOfMessages={messagesMock} isEmpty={!messagesMock.length} />
        </ForumPageRightBlock>
      </ForumPageWrapper>
    </BaseLayout>
  )
})
