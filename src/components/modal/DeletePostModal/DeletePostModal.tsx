import {ConfirmModal} from 'components/ui/ConfirmModal';
import {ModalProps} from 'components/ui/Modal';
import {Post} from 'types';
import {useDeletePostModal} from './DeletePostModal.hook';

type DeletePostModalProps = {post: Post} & ModalProps;

export function DeletePostModal({post, isOpen, onClose}: DeletePostModalProps) {
    const {isLoading, handleSubmit} = useDeletePostModal({onClose, postId: post.id});

    return (
        <ConfirmModal
            onClose={onClose}
            isOpen={isOpen}
            className="max-w-2xl"
            title="Usuwanie postu"
            onSubmit={handleSubmit}
            isLoading={isLoading}
        >
            <h3 className="font-semibold">
                Czy chcesz usunąć post <strong>{post.title}</strong>?
            </h3>
        </ConfirmModal>
    );
}
