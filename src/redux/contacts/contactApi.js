import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// baseUrl: `https://648715b9beba6297278fe0ef.mockapi.io`,

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
      baseUrl:`https://connections-api.herokuapp.com`,
      prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
          headers.set('Authorization', `Bearer ${token}`)
        }
        return headers;
      },
    }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
      fetchContacts: builder.query({
        query: () => `/contacts`,
          providesTags: ['Contact'],
      }),
      addContact: builder.mutation({
        query: newContact => ({
          url:`/contacts`,
          method: `POST`,
          body: newContact,
        }),
        invalidatesTags: ['Contact'],
      }),
      deleteContact: builder.mutation({
        query: contactId => ({
          url: `/contacts/${contactId}`,
          method: `DELETE`,
        }),
        invalidatesTags: ['Contact'],
      })
    }),
  });


  export const {
    useFetchContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation
  } = contactsApi;


