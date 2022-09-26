import React, { RefObject } from 'react'

export default function useFullscreenStatus(elRef: RefObject<HTMLElement>) {
  const [isFullscreen, setIsFullscreen] = React.useState(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document[getBrowserFullscreenElementProp()] !== null
  )

  const setFullscreen = () => {
    if (elRef.current == null) return

    elRef.current
      .requestFullscreen()
      .then(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setIsFullscreen(document[getBrowserFullscreenElementProp()] !== null)
      })
      .catch(() => {
        setIsFullscreen(false)
      })
  }

  React.useLayoutEffect(() => {
    document.onfullscreenchange = () =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setIsFullscreen(document[getBrowserFullscreenElementProp()] !== null)

    return () => {
      document.onfullscreenchange = null
    }
  })

  return [isFullscreen, setFullscreen]
}

function getBrowserFullscreenElementProp() {
  if (typeof document.fullscreenElement !== 'undefined') {
    return 'fullscreenElement'
  } else {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (typeof document.mozFullScreenElement !== 'undefined') {
      return 'mozFullScreenElement'
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
    } else if (typeof document.msFullscreenElement !== 'undefined') {
      return 'msFullscreenElement'
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
    } else if (typeof document.webkitFullscreenElement !== 'undefined') {
      return 'webkitFullscreenElement'
    } else {
      throw new Error('fullscreenElement is not supported by this browser')
    }
  }
}
