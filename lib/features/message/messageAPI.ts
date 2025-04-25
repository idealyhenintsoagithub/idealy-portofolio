import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const messageApi = createApi({
  reducerPath: 'messageApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/',
    prepareHeaders: (headers) => {
      headers.set('Content-type', 'application/ld+json');
  
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getMessages: builder.query<any, string>({
      query: (name) => {
        
        return {
          url: '',
          method: 'GET'
        }
      },
    }),
    createMessage: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: 'messages',
          method: 'POST',
          body: JSON.stringify(data.body)
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetMessagesQuery,
  useCreateMessageMutation,
} = messageApi