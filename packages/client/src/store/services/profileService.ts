import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API, METHODS } from '@/utils'
import {
  ProfileDTO,
  UserInfoDTO,
  EditPasswordDTO,
  SearchForUserByLoginDTO,
} from '@/types'

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API.API_BASE_URL,
    credentials: 'include',
  }),
  endpoints: builder => ({
    getUserById: builder.query<ProfileDTO, number>({
      query: id => `${API.GET_USER_BY_ID}/${id}`,
    }),
    changeUserProfile: builder.mutation<ProfileDTO, UserInfoDTO>({
      query: payload => ({
        url: API.CHANGE_USER_PROFILE,
        method: METHODS.PUT,
        body: payload,
      }),
    }),
    changeUserAvatar: builder.mutation<ProfileDTO, string>({
      query: payload => ({
        url: API.CHANGE_USER_AVATAR,
        method: METHODS.PUT,
        body: payload,
      }),
    }),
    changeUserPassoword: builder.mutation<string, EditPasswordDTO>({
      query: payload => ({
        url: API.CHANGE_USER_PASSWORD,
        method: METHODS.PUT,
        body: payload,
        responseHandler: response =>
          response.status === 200 ? response.text() : response.json(),
      }),
    }),
    searchUserByLogin: builder.mutation<ProfileDTO[], SearchForUserByLoginDTO>({
      query: payload => ({
        url: API.SEARCH_FOR_USER_BY_LOGIN,
        method: METHODS.POST,
        body: payload,
      }),
    }),
  }),
})

export const {
  useGetUserByIdQuery,
  useChangeUserProfileMutation,
  useChangeUserPassowordMutation,
} = profileApi
