import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { EncounterData, Job } from '../types'

export const encounterApi = createApi({
  reducerPath: 'encounterApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/loadencounter' }),
  endpoints: (builder) => ({
    getEncounterByName: builder.query<EncounterData, string>({
      query: (name) => `?encounter=${name}`,
    }),
  }),
})

export const jobApi = createApi({
  reducerPath: 'jobApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/job' }),
  endpoints: (builder) => ({
    getJobByName: builder.query<Job, string>({
      query: (name) => `?job=${name}`
    }),
    getAllJobs: builder.query<{[key:string]: Job}, void>({
      query: () => ''
    })
  })
})

export const { useGetEncounterByNameQuery } = encounterApi;
export const { useGetJobByNameQuery, useGetAllJobsQuery } = jobApi;