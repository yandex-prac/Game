import React, { memo, useEffect, useRef, useState } from 'react'
import { BaseLayout } from '@/components'
import { Game } from '@/game'
import { CanvasWrapper, StartButton } from './StyledComponents'
import { WithAuth } from '@/hoc'

const Main = memo(() => {
  const canvas = useRef<HTMLCanvasElement>(null)
  const [startTime, setStartTime] = useState(0)
  const [endTime, setEndTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  let game: Game | undefined

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
            Ваше время:
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
            textIntl="PLAY_GAME_MENU_ITEM"
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

const withMain = WithAuth(Main)

export { withMain as Main }
