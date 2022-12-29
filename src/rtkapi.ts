import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { EncounterData, Job } from '../types'

export const encounterApi = createApi({
  reducerPath: 'encounterApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/encounter' }),
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
    getJobByName: builder.query<Job | null, string>({
      query: (name) => {
        if (name.length) return `?job=${name}`;
        else return '';
      }
    }),
    getAllJobs: builder.query<{[key:string]: {fullName: string, iconPath: string}}, void>({
      query: () => '?job=all'
    })
  })
})

export const { useGetEncounterByNameQuery } = encounterApi;
export const { useGetJobByNameQuery, useGetAllJobsQuery } = jobApi;