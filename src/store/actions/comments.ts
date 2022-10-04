import {api} from 'services/api';
import {Comment, Post} from 'types';

type GetCommentsArgs = {
    postId: Post['id'];
};

export const commentsApi = api.injectEndpoints({
    endpoints: build => ({
        getComments: build.query<Comment[], GetCommentsArgs>({
            query: ({postId}: GetCommentsArgs) => ({url: 'comments', params: {postId}})
        })
    })
});

export const {useGetCommentsQuery} = commentsApi;
