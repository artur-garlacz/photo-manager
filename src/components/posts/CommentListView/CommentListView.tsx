import {useGetCommentsQuery} from 'store/actions/comments';
import {Comment} from 'types';
import {CommentItemView} from './CommentItemView';

type CommentListViewProps = {
    postId: Comment['id'];
};

export function CommentListView({postId}: CommentListViewProps) {
    const {data, isLoading} = useGetCommentsQuery({postId});

    if (!data || isLoading) {
        return <></>;
    }

    return (
        <>
            {data.map(comment => (
                <CommentItemView data={comment} />
            ))}
        </>
    );
}
