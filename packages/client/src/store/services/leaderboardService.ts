import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API, METHODS, API_CONSTANTS } from '@/utils'
import {
  LeadersDTO,
  LeadersResponseDTO,
  NewLeaderDTO,
  NewLeaderResponseDTO,
} from '@/types'

export const leaderboardAPI = createApi({
  reducerPath: 'leaderboardAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: API.API_BASE_URL,
    credentials: 'include',
  }),
  endpoints: builder => ({
    add: builder.query<NewLeaderResponseDTO, NewLeaderDTO>({
      query: payload => {
        return {
          url: API.NEW_LEADER,
          method: METHODS.POST,
          body: payload,
          responseHandler: response =>
            response.status === 200 ? response.text() : response.json(),
        }
      },
    }),
    getTeamLeaderboard: builder.query<LeadersResponseDTO[], LeadersDTO>({
      query: payload => {
        return {
          url: API.GET_LEADERS + '/' + API_CONSTANTS.TEAM_NAME,
          method: METHODS.POST,
          body: payload,
          responseHandler: response =>
            response.status === 200 ? response.json() : response.text(),
        }
      },
    }),
  }),
})

export const { useLazyAddQuery, useGetTeamLeaderboardQuery } = leaderboardAPI
