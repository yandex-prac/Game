import React, { memo, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import {
  ForumChatListBlock,
  ForumPageTitle,
  ForumPageWrapper,
  ForumPageLeftBlock,
  ForumPageRightBlock,
  ForumPageButtonBlock,
  InputGroup,
} from './StyledComponents'
import { BaseLayout, Button, Chat, ChatItem, Modal, Input } from '@/components'
import { useCustomIntl } from '@/hooks'
import { WithAuth } from '@/hoc'
import { validAddForum } from '@/utils'
import { useGetTopicsQuery, useLazyAddTopicQuery } from '@/store'

const Forum = memo(() => {
  // Заменить мок на данные с сервера.
  const messagesMock = ['message1', 'message2']

  // const res = useGetTopicsQuery(undefined)

  //#####################

  const topics = useGetTopicsQuery(undefined)
  const [addTopic] = useLazyAddTopicQuery()

  const [isOpen, setOpen] = useState(false)

  const handleOpenModal = () => setOpen(true)
  const handleCloseModal = () => setOpen(false)

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        title: '',
        author: '',
        content: '',
      },
      onSubmit: values => addTopic(values),
      validationSchema: validAddForum(),
    })

  return (
    <>
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
                <Button
                  onClick={handleOpenModal}
                  type={'button'}
                  textIntl={'CREATE_CHAT'}
                />
              </ForumPageButtonBlock>
            </ForumChatListBlock>
          </ForumPageLeftBlock>
          <ForumPageRightBlock>
            <Chat arrayOfMessages={[]} />
          </ForumPageRightBlock>
        </ForumPageWrapper>
      </BaseLayout>

      <Modal isOpen={isOpen} onCloseModal={handleCloseModal} title="NEW_CHAT">
        <InputGroup>
          <Input
            labelIntl="TITLE"
            value={values.title}
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && errors.title ? errors.title : undefined}
          />
        </InputGroup>
        <InputGroup>
          <Input
            labelIntl="AUTHOR"
            value={values.author}
            type="text"
            name="author"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.author && errors.author ? errors.author : undefined}
          />
        </InputGroup>
        <InputGroup>
          <Input
            labelIntl="CONTENT"
            value={values.content}
            type="text"
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.content && errors.content ? errors.content : undefined
            }
          />
        </InputGroup>
        <Button
          onClick={handleSubmit}
          type="submit"
          textIntl="ADD_CHAT"
          style={{ width: '100%', marginTop: '40px' }}
        />
      </Modal>
    </>
  )
})

const withAuthForum = WithAuth(Forum)

export { withAuthForum as Forum }
