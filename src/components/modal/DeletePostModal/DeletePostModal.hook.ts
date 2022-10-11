import {useCallback} from 'react';
import {useDeletePostMutation} from 'store/actions/posts';
import {Post} from 'types';

type Props = {
    onClose: () => void;
    postId: Post['id'];
};

export function useDeletePostModal({onClose, postId}: Props) {
    const [deletePost, {isLoading}] = useDeletePostMutation();

    const handleSubmit = useCallback(async () => {
        await deletePost(postId);
        onClose();
    }, [deletePost, onClose, postId]);

    return {handleSubmit, isLoading};
}
