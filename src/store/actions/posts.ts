import {api} from 'services/api';
import {Post} from 'types';

export const postsApi = api.injectEndpoints({
    endpoints: build => ({
        getPosts: build.query<Post[], void>({
            query: () => ({url: 'posts'})
        }),
        getPost: build.query<Post, Post['id']>({
            query: id => `posts/${id}`,
            providesTags: (_post, _err, id) => [{type: 'Posts', id}]
        })
        // addPost: build.mutation<Post, Partial<Post>>({
        //   query(body) {
        //     return {
        //       url: `posts`,
        //       method: "POST",
        //       body,
        //     };
        //   },
        //   invalidatesTags: ["Posts"],
        // }),
        // deletePost: build.mutation<{ success: boolean; id: number }, number>({
        //   query(id) {
        //     return {
        //       url: `posts/${id}`,
        //       method: "DELETE",
        //     };
        //   },
        //   invalidatesTags: (post) => [{ type: "Posts", id: post?.id }],
        // }),
    })
});

export const {useGetPostsQuery, useGetPostQuery} = postsApi;
