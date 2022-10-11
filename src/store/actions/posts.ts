import {api} from 'services/api';
import {Post} from 'types';

export const postsApi = api.injectEndpoints({
    endpoints: build => ({
        getPosts: build.query<Post[], void>({
            query: () => ({url: 'posts'}),
            providesTags: result =>
                result
                    ? [
                          ...result.map(({id}) => ({type: 'Posts', id} as const)),
                          {type: 'Posts', id: 'LIST'}
                      ]
                    : [{type: 'Posts', id: 'LIST'}]
        }),
        getPost: build.query<Post, Post['id']>({
            query: id => `posts/${id}`,
            providesTags: (result, error, id) => [{type: 'Posts', id}]
        }),
        createPost: build.mutation<Post, Partial<Post>>({
            query(body) {
                return {
                    url: `posts`,
                    method: 'POST',
                    body
                };
            },
            invalidatesTags: ['Posts']
        }),
        deletePost: build.mutation<{success: boolean; id: Post['id']}, Post['id']>({
            query(id) {
                return {
                    url: `posts/${id}`,
                    method: 'DELETE'
                };
            },
            invalidatesTags: post => [{type: 'Posts', id: post?.id}]
        })
    })
});

export const {useGetPostsQuery, useGetPostQuery, useCreatePostMutation, useDeletePostMutation} =
    postsApi;
