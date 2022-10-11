import {DeleteCommentModal} from 'components/modal/DeleteCommentModal';
import {useCallback, useState} from 'react';
import {useGetCommentsQuery} from 'store/actions/comments';
import {Comment} from 'types';
import {CommentItemView} from './CommentItemView';

type CommentListViewProps = {
    postId: Comment['id'];
};

export function CommentListView({postId}: CommentListViewProps) {
    const {data, isLoading} = useGetCommentsQuery({postId});
    const [selectedComment, setComment] = useState<Comment>();

    const handleSelect = useCallback((comment?: Comment) => {
        setComment(comment);
    }, []);

    if (!data || isLoading) {
        return <></>;
    }

    return (
        <>
            {data.map(comment => (
                <CommentItemView data={comment} onDelete={() => handleSelect(comment)} />
            ))}
            {!!selectedComment && (
                <DeleteCommentModal
                    comment={selectedComment}
                    isOpen={!!selectedComment}
                    onClose={() => handleSelect()}
                />
            )}
        </>
    );
}
