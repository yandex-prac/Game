import React, { memo, useEffect, useRef } from 'react'
import { BaseLayout } from '@/components'
import { Game } from '@/game'

export const Main = memo(() => {
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const view = new Game(canvas.current as HTMLCanvasElement)
  })

  return (
    <BaseLayout>
      <canvas width={200} height={200} ref={canvas} />
    </BaseLayout>
  )
})
