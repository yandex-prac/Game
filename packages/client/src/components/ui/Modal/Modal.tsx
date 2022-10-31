import React from 'react'
import { ModalType } from './types'
import { Wrapper, Inner, Title } from './StyledComponents'

export const Modal = ({ children, isOpen, onCloseModal, title }: ModalType) => {
  return (
    <Wrapper isOpen={isOpen} onClick={onCloseModal}>
      <Inner>
        <Title>{title}</Title>
        {children}
      </Inner>
    </Wrapper>
  )
}
