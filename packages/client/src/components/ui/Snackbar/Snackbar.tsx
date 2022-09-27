import React, { useEffect } from 'react'
import {
  StyledSnackbar,
  StyledText,
  StyledCloseIcon,
  StyledTypeIcon,
} from './StyledComponents'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { setSnackbar } from '@/store'
import { closeicon, okicon, warningicon, attentionicon } from '@/image'
import { RenderIconType } from '@/types'
import { SNACKBAR_TYPE } from '@/utils'

export const Snackbar = () => {
  const dispatch = useAppDispatch()

  const { isOpen, message, type } = useAppSelector(
    state => state.snackbarReducer
  )

  let timerToClose: any

  function handleTimeout() {
    timerToClose = setTimeout(() => {
      dispatch(
        setSnackbar({ isOpen: false, message: '', type: SNACKBAR_TYPE.SUCCESS })
      )
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
    dispatch(
      setSnackbar({ isOpen: false, message: '', type: SNACKBAR_TYPE.SUCCESS })
    )
  }

  function renderIcon(type: RenderIconType) {
    const iconMap = {
      success: okicon,
      error: warningicon,
      attention: attentionicon,
      information: warningicon,
    }
    return <StyledTypeIcon src={iconMap[type]} />
  }

  return isOpen ? (
    <StyledSnackbar className={type}>
      {renderIcon(type)}
      <StyledText>{message}</StyledText>
      <StyledCloseIcon src={closeicon} onClick={handleClose} />
    </StyledSnackbar>
  ) : (
    <></>
  )
}
