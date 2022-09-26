import React from 'react'
import { StyledFSButtonProps } from './types'
import { Button } from '@/components'
import useFullscreenStatus from '@/hooks/useFullscreenStatus'

export const FullscreenButton = ({ ref }: StyledFSButtonProps) => {
  const [isFullscreen, setIsFullscreen] = useFullscreenStatus(ref)
  const handleFullscreen = () => {
    // Ругается TS, непонятно на что
    if (typeof setIsFullscreen === 'boolean') {
      return
    }
    const handleExitFullscreen = () => document.exitFullscreen()
    if (isFullscreen) {
      handleExitFullscreen()
    } else {
      setIsFullscreen()
    }
  }

  return (
    <Button
      type="button"
      textIntl={
        isFullscreen ? 'FULLSCREEN_MENU_ITEM_EXIT' : 'FULLSCREEN_MENU_ITEM'
      }
      onClick={handleFullscreen}
    />
  )
}
