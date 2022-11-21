import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { EncounterData } from '../types'

export const encounterApi = createApi({
  reducerPath: 'encounterApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/loadencounter' }),
  endpoints: (builder) => ({
    getEncounterByName: builder.query<EncounterData, string>({
      query: (name) => `?encounter=${name}`,
    }),
  }),
})

export const { useGetEncounterByNameQuery } = encounterApi;