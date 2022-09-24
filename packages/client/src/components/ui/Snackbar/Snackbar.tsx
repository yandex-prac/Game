import React, { useEffect } from 'react'
import {
  StyledSnackbar,
  StyledText,
  StyledCloseIcon,
  StyledTypeIcon,
} from './StyledComponents'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { setSnackbar } from '@/store/reducers/snackbarSlice'
import { closeicon, okicon, warningicon, attentionicon } from '../../../image'
export const Snackbar = () => {
  const dispatch = useAppDispatch()

  const { isOpen, message, type } = useAppSelector(
    state => state.snackbarReducer
  )

  let timerToClose: any
  function handleTimeout() {
    timerToClose = setTimeout(() => {
      dispatch(setSnackbar({ isOpen: false, message: '', type: '' }))
    }, 4100)
  }

  useEffect(() => {
    if (isOpen) {
      handleTimeout()
    }
    return () => {
      clearTimeout(timerToClose)
    }
  }, [isOpen, timerToClose])

  function handleClose() {
    clearTimeout(timerToClose)
    dispatch(setSnackbar({ isOpen: false, message: '', type: '' }))
  }

  function renderIcon(type: string) {
    switch (type) {
      case 'success':
        return <StyledTypeIcon src={okicon} />

      case 'error':
        return <StyledTypeIcon src={warningicon} />

      case 'attention':
        return <StyledTypeIcon src={attentionicon} />

      case 'information':
        return <StyledTypeIcon src={warningicon} />
    }
  }

  return (
    isOpen && (
      <StyledSnackbar className={type}>
        {renderIcon(type)}
        <StyledText>{message}</StyledText>
        <StyledCloseIcon src={closeicon} onClick={handleClose} />
      </StyledSnackbar>
    )
  )
}
