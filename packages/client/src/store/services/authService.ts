import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API, METHODS } from '@/utils'
import {
  SigninResponseDTO,
  SigninDTO,
  UserInfoDTO,
  SignupResponseDTO,
} from '@/types'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: API.API_BASE_URL,
    credentials: 'include',
  }),
  endpoints: builder => ({
    signin: builder.mutation<SigninResponseDTO, SigninDTO>({
      query: payload => {
        return {
          url: API.SIGNIN,
          method: METHODS.POST,
          body: payload,
          responseHandler: (response: Response) => {
            return response.json()
          },
        }
      },
    }),
    signup: builder.mutation<SignupResponseDTO, UserInfoDTO>({
      query: payload => {
        return {
          url: API.SIGNUP,
          method: METHODS.POST,
          body: payload,
          responseHandler: (response: Response) => {
            return response.json()
          },
        }
      },
    }),
    signout: builder.mutation({
      query: () => ({
        url: API.SIGNOUT,
        method: METHODS.POST,
      }),
    }),
    getUserInfo: builder.mutation<UserInfoDTO, unknown>({
      query: () => API.GET_USER_INFO,
    }),
  }),
})

export const {
  useSigninMutation,
  useSignupMutation,
  useSignoutMutation,
  useGetUserInfoMutation,
} = authAPI
