import React, { memo, useEffect, useRef } from 'react'
import { BaseLayout } from '@/components'
import { Game } from '@/game'
import { CanvasWrapper } from './StyledComponents'

export const Main = memo(() => {
  const canvas = useRef<HTMLCanvasElement>(null)

  let game: Game | undefined

  useEffect(() => {
    if (!game) {
      game = new Game(canvas.current as HTMLCanvasElement)
    }
  })

  return (
    <BaseLayout>
      <CanvasWrapper>
        <canvas width={400} height={400} ref={canvas} />
      </CanvasWrapper>
    </BaseLayout>
  )
})
