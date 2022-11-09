import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API, METHODS } from '@/utils'
import { GetTopicsDTO, AddTopicDTO } from '@/types'

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  endpoints: builder => ({
    getTopics: builder.query<any, unknown>({
      query: () => API.GET_TOPICS,
    }),
    addTopic: builder.query<AddTopicDTO, GetTopicsDTO>({
      query: payload => ({
        url: API.ADD_TOPIC,
        method: METHODS.POST,
        body: payload,
      }),
    }),
  }),
})

export const { useGetTopicsQuery, useLazyAddTopicQuery } = chatApi
