import {useParams} from 'react-router-dom';
import {useGetPostQuery} from 'store/actions/posts';

type PostParams = {
    postId: string;
};

export function useSinglePostView() {
    const {postId} = useParams<PostParams>();
    const id = parseInt(postId!);
    const {data: post, isLoading} = useGetPostQuery(id);

    return {
        post,
        isLoading
    };
}
