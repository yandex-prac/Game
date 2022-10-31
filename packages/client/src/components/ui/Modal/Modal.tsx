import React, { useRef } from 'react'
import { ModalType } from './types'
import { Wrapper, Inner, Title } from './StyledComponents'
import { useClickByOutZone } from '@/hooks'

export const Modal = ({ children, isOpen, onCloseModal, title }: ModalType) => {
  const modalRef = useRef(null)

  useClickByOutZone({ ref: modalRef, isOpen, closeCallback: onCloseModal })

  return (
    <Wrapper isOpen={isOpen}>
      <Inner ref={modalRef}>
        <Title>{title}</Title>
        {children}
      </Inner>
    </Wrapper>
  )
}
