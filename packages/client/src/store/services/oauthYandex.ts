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
      query: () => API.YANDEX_GET_OAUTH_ID,
    }),
    signup: builder.query<string, OAuthDTO>({
      query: () => ({
        url: API.YANDEX_OAUTH,
        method: METHODS.POST,
      }),
    }),
  }),
})

export const { useLazyGetServiceIdQuery, useSignupQuery } = oauthAPI
