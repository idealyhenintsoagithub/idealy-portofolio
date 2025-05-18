// Need to use the React-specific entry point to import createApi
import Project from '@/models/project';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import parseResponseCollection from './parseResponseCollection';

type GetProjectsParams = {};

type GetProjectByNameParams = {
  name: string;
};

// Define a service using a base URL and expected endpoints
export const projectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], GetProjectsParams>({
      query: (params: GetProjectsParams) => `projects`,
      transformResponse: (response) => parseResponseCollection(response),
    }),
    getProjectByName: builder.query<Project, GetProjectByNameParams>({
      query: ({ name }: GetProjectByNameParams) => {
        const params = new URLSearchParams();
        params.set('name', name);

        return {
          url: `projects?${params.toString()}`
        };
      },
      transformResponse: (response: any) => response && response['member'][0] as Project,
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProjectsQuery,
  useGetProjectByNameQuery,
} = projectApi;
