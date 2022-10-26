import {createApi, fetchBaseQuery, retry} from '@reduxjs/toolkit/query/react';
import {getEnv} from 'utils/env';

const baseQuery = fetchBaseQuery({
    baseUrl: getEnv('REACT_APP_BASE_URL', '')
});

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 6});

export const api = createApi({
    baseQuery: baseQueryWithRetry,
    tagTypes: ['Posts', 'Users', 'Comments', 'Albums', 'Photos'],
    endpoints: () => ({})
});
