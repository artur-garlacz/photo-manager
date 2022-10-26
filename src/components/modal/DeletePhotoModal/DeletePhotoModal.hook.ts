import {useCallback} from 'react';
import {useDeletePhotoMutation} from 'store/actions/photos';
import {Photo} from 'types';

type Props = {
    onClose: () => void;
    photoId: Photo['id'];
};

export function useDeletePhotoModal({onClose, photoId}: Props) {
    const [deletePost, {isLoading}] = useDeletePhotoMutation();

    const handleSubmit = useCallback(async () => {
        await deletePost(photoId);
        onClose();
    }, [deletePost, onClose, photoId]);

    return {handleSubmit, isLoading};
}
