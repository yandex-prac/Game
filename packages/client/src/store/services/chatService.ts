import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API, METHODS } from '@/utils'
import { GetTopicsDTO, AddTopicDTO } from '@/types'

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  endpoints: builder => ({
    getComments: builder.query<any, unknown>({
      query: payload => ({
        url: API.GET_COMMENTS,
        method: METHODS.POST,
        body: { id: payload },
      }),
    }),
    addComment: builder.query<any, any>({
      query: payload => ({
        url: API.ADD_COMMENT,
        method: METHODS.POST,
        body: payload,
      }),
    }),
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

export const {
  useGetTopicsQuery,
  useLazyAddTopicQuery,
  useLazyGetCommentsQuery,
  useLazyAddCommentQuery,
} = chatApi
