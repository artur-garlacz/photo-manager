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
        }),
        updateUser: build.mutation<User, Partial<User>>({
            query(data) {
                const {id, ...body} = data;
                return {
                    url: `users/${id}`,
                    method: 'PUT',
                    body
                };
            },
            invalidatesTags: post => [{type: 'Users', id: post?.id}]
        })
    })
});

export const {useGetUserQuery, useGetUsersQuery, useUpdateUserMutation} = usersApi;
