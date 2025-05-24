// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import parseResponseCollection from './parseResponseCollection';
import { Training } from '../models/training';

type GetTrainingParams = {
  filters?: any;
};

// Define a service using a base URL and expected endpoints
export const trainingApi = createApi({
  reducerPath: 'trainingApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
  endpoints: (builder) => ({
    getTraining: builder.query<Training[], GetTrainingParams>({
      query: ({ filters }: GetTrainingParams) => {
        const urlParams = new URLSearchParams();
        if (filters && filters.id) {
          urlParams.set('id', [...filters.id].join(', '));
        }
        const url = `trainings?${urlParams.toString()}`;

        return {
          url
        };
      },
      transformResponse: (response) => parseResponseCollection<Training>(response),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTrainingQuery,
} = trainingApi;
