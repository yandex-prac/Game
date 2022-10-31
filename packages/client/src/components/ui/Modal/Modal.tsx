import React, { useEffect, useRef } from 'react'
import { ModalType } from './types'
import { Wrapper, Inner, Title } from './StyledComponents'

export const Modal = ({ children, isOpen, onCloseModal, title }: ModalType) => {
  const modalRef = useRef(null)

  const handleCloseByOutZone = (evt: Event) => {
    const element = modalRef.current as null | Element
    const target = evt.target as HTMLElement
    if (!isOpen) return
    if (element && !element.contains(target)) {
      onCloseModal()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleCloseByOutZone, true)

    return () =>
      document.removeEventListener('click', handleCloseByOutZone, true)
  }, [isOpen])

  return (
    <Wrapper isOpen={isOpen}>
      <Inner ref={modalRef}>
        <Title>{title}</Title>
        {children}
      </Inner>
    </Wrapper>
  )
}
