import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API, METHODS } from '@/utils'
import //
'@/types'
import { OAuthIDDTO, OAuthIDResponseDTO, OAuthDTO } from '@/types'

export const oauthAPI = createApi({
  reducerPath: 'oauthAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: API.API_BASE_URL,
    credentials: 'include',
  }),
  endpoints: builder => ({
    getServiceId: builder.query<OAuthIDResponseDTO, OAuthIDDTO>({
      query: ({ redirect_uri }) =>
        `${
          API.API_BASE_URL + API.YANDEX_GET_OAUTH_ID
        }?redirect_uri=${redirect_uri}`,
    }),
    signupYa: builder.mutation<string, OAuthDTO>({
      query: ({ code, redirect_uri }) => ({
        url: API.API_BASE_URL + API.YANDEX_OAUTH,
        method: METHODS.POST,
        body: {
          code,
          redirect_uri,
        },
      }),
    }),
  }),
})

export const { useLazyGetServiceIdQuery, useSignupYaMutation } = oauthAPI
