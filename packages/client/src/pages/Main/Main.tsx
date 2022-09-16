import React, { memo, useEffect, useRef, useState } from 'react'
import { BaseLayout } from '@/components'
import { Game } from '@/game'
import { CanvasWrapper, StartButton } from './StyledComponents'

let game: Game | undefined

export const Main = memo(() => {
  const canvas = useRef<HTMLCanvasElement>(null),
    [startTime, setStartTime] = useState<number>(0),
    [endTime, setEndTime] = useState<number>(0),
    [isPlaying, setIsPlaying] = useState<boolean>(false)

  useEffect(() => {
    if (!game) {
      game = new Game(canvas.current as HTMLCanvasElement)

      game.on('endGame', () => {
        setEndTime(Date.now())
        setIsPlaying(false)
      })
    }
  }, [])

  return (
    <BaseLayout>
      <CanvasWrapper>
        {isPlaying ? null : (
          <h1>
            Ваше время:{' '}
            {new Date(endTime - startTime).toLocaleTimeString([], {
              second: 'numeric',
              minute: 'numeric',
            })}
          </h1>
        )}
        <canvas width={400} height={400} ref={canvas} />
        {isPlaying ? null : (
          <StartButton
            type="button"
            text="Начать"
            onClick={() => {
              setIsPlaying(true)
              game?.start()
              setStartTime(Date.now())
            }}
          />
        )}
      </CanvasWrapper>
    </BaseLayout>
  )
})
