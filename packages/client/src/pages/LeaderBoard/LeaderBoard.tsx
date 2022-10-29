import React, { memo } from 'react'
import { BaseLayout } from '@/components'
import {
  Content,
  Title,
  LinkToGame,
  Loading,
  LeaderItem,
} from './StyledComponents'
import { PATHNAMES } from '@/utils'
import { DarkModeType } from '@/types'
import { useCustomIntl } from '@/hooks'
import { WithAuth } from '@/hoc'
import { useGetTeamLeaderboardQuery } from '@/store/services/leaderboardService'

const LeaderBoard = memo(({ darkMode }: DarkModeType) => {
  const { isLoading, data } = useGetTeamLeaderboardQuery({
    ratingFieldName: 'time',
    cursor: 0,
    limit: 10,
  })

  if (isLoading) {
    return (
      <BaseLayout>
        <Content darkMode={darkMode}>
          <Loading>Loading...</Loading>
        </Content>
      </BaseLayout>
    )
  }

  return (
    <BaseLayout>
      <Content darkMode={darkMode}>
        {data && data.length > 0 ? (
          <>
            {data.map((leader, index) => {
              return (
                <LeaderItem>
                  <div>{index + 1}</div>
                  <div>
                    {leader.data.username || 'Неизвестный пользователь'}
                  </div>
                  <div>
                    {new Date(leader.data.time).toLocaleTimeString([], {
                      minute: '2-digit',
                      second: '2-digit',
                    })}
                  </div>
                </LeaderItem>
              )
            })}
          </>
        ) : (
          <>
            <Title darkMode={darkMode}>
              {useCustomIntl('LEADER_BOARD_TITLE')}
            </Title>
            <LinkToGame to={PATHNAMES.MAIN}>
              {useCustomIntl('LEADER_BOARD_LINK')}
            </LinkToGame>
          </>
        )}
      </Content>
    </BaseLayout>
  )
})

const withLeaderBoard = WithAuth(LeaderBoard)

export { withLeaderBoard as LeaderBoard }
