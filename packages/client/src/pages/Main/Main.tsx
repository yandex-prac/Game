import React, { memo, useEffect, useRef, useState } from 'react'
import { BaseLayout } from '@/components'
import { Game } from '@/game'
import { CanvasWrapper, StartButton } from './StyledComponents'
import { WithAuth } from '@/hoc'
import { useLazyAddQuery } from '@/store/services/leaderboardService'
import { LOCAL_STORAGE_CONSTANTS, API_CONSTANTS } from '@/utils'

const Main = memo(() => {
  const canvas = useRef<HTMLCanvasElement>(null)
  const [startTime, setStartTime] = useState(0)
  const [endTime, setEndTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [addLeaderQuery] = useLazyAddQuery()

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

  useEffect(() => {
    if (startTime !== 0 && endTime !== 0) {
      const id = localStorage.getItem(LOCAL_STORAGE_CONSTANTS.USER_ID)
      const username = localStorage.getItem(LOCAL_STORAGE_CONSTANTS.USENAME)

      if (!id || !username) {
        throw new Error('Auth error. No user id')
      }

      addLeaderQuery({
        data: {
          user_id: id,
          username,
          time: endTime - startTime,
        },
        ratingFieldName: 'time',
        teamName: API_CONSTANTS.TEAM_NAME,
      })
    }
  }, [isPlaying])

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
