import {api} from 'services/api';
import {User} from 'types';

export const usersApi = api.injectEndpoints({
    endpoints: build => ({
        getUsers: build.query<User[], void>({
            query: () => ({url: 'users'})
        }),
        getUser: build.query<User, User['id']>({
            query: id => `users/${id}`,
            providesTags: (_post, _err, id) => [{type: 'Users', id}]
        })
    })
});

export const {useGetUserQuery, useGetUsersQuery} = usersApi;
