import React from 'react'
import { Button } from '@/components'
import useFullscreenStatus from '@/hooks/useFullscreenStatus'

export const FullscreenButton = () => {
  const root = document.getElementById('root')
  const [isFullscreen, setIsFullscreen] = useFullscreenStatus(root)
  const handleFullscreen = () => {
    if (typeof setIsFullscreen === 'boolean') {
      return
    }
    const handleExitFullscreen = () => document.exitFullscreen()
    isFullscreen ? handleExitFullscreen() : setIsFullscreen()
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
