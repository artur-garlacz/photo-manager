import {useCallback} from 'react';
import {useDeleteCommentMutation} from 'store/actions/comments';
import {Comment} from 'types';

type Props = {
    onClose: () => void;
    commentId: Comment['id'];
};

export function useDeleteCommentModal({onClose, commentId}: Props) {
    const [deletePost, {isLoading}] = useDeleteCommentMutation();

    const handleSubmit = useCallback(async () => {
        await deletePost(commentId);
        onClose();
    }, [deletePost, onClose, commentId]);

    return {handleSubmit, isLoading};
}
