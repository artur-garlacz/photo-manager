import {useParams} from 'react-router-dom';
import {useGetCommentsQuery} from 'store/actions/comments';
import {useGetPostQuery} from 'store/actions/posts';

type PostParams = {
    postId: string;
};

export function useSinglePostView() {
    const {postId} = useParams<PostParams>();
    const id = parseInt(postId!);
    const {data: post, isLoading: isLoadingPost} = useGetPostQuery(id);
    const {data: comments, isLoading: isLoadingComments} = useGetCommentsQuery({postId: id});

    return {
        post,
        comments,
        isLoadingPost,
        isLoadingComments
    };
}
