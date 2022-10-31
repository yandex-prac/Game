import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API, METHODS } from '@/utils'

type GetTopicsDTO = {
  title: string
  author: string
  content?: string
}

type AddTopicDTO = {
  message: string
}

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  endpoints: builder => ({
    getTopics: builder.query<GetTopicsDTO[], unknown>({
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

// {
//   "first_name": "string",
//   "second_name": "string",
//   "login": "strdfjhz123ssasds",
//   "email": "strdfjhz123ssasds@gmail.com",
//   "password": "S123!jshd",
//   "phone": "+79609517723"
// }
