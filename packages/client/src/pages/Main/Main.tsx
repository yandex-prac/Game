import React, { memo, useEffect, useRef, useState } from 'react'
import { BaseLayout } from '@/components'
import { Game } from '@/game'
import { CanvasWrapper, StartButton } from './StyledComponents'
import { WithAuth } from '@/hoc'
import { useLazyAddQuery } from '@/store/services/leaderboardService'
import {
  LOCAL_STORAGE_CONSTANTS,
  API_CONSTANTS,
  CONTENT_RU,
  SNACKBAR_TYPE,
} from '@/utils'
import { setSnackbar } from '@/store'
import { GameStatus } from '@/pages/Main/types'

const Main = memo(() => {
  const canvas = useRef<HTMLCanvasElement>(null)
  const [startTime, setStartTime] = useState(0)
  const [endTime, setEndTime] = useState(0)
  const [gameStatus, setGameStatus] = useState<GameStatus>('init')
  const [addLeaderQuery] = useLazyAddQuery()

  let game: Game | undefined

  useEffect(() => {
    if (!game) {
      game = new Game(canvas.current as HTMLCanvasElement)

      game.on('win', () => {
        setEndTime(Date.now())
        setGameStatus('win')
      })

      game.on('lose', () => {
        setGameStatus('lose')
      })
    }
  }, [])

  useEffect(() => {
    if (gameStatus === 'win') {
      const id = localStorage.getItem(LOCAL_STORAGE_CONSTANTS.USER_ID)
      const username = localStorage.getItem(LOCAL_STORAGE_CONSTANTS.USENAME)

      if (!id || !username) {
        setSnackbar({
          isOpen: true,
          message: CONTENT_RU.AUTH_ERROR,
          type: SNACKBAR_TYPE.ERROR,
        })
        return
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
  }, [gameStatus])

  return (
    <BaseLayout>
      <CanvasWrapper>
        {gameStatus === 'win' && (
          <h1>
            Ваше время:
            {new Date(endTime - startTime).toLocaleTimeString([], {
              second: 'numeric',
              minute: 'numeric',
            })}
          </h1>
        )}
        {gameStatus === 'lose' && <h1>Вы проиграли :с</h1>}
        <canvas width={400} height={400} ref={canvas} />
        {gameStatus !== 'playing' && (
          <StartButton
            type="button"
            textIntl="PLAY_GAME_MENU_ITEM"
            onClick={() => {
              setGameStatus('playing')
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
