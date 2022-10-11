import {ConfirmModal} from 'components/ui/ConfirmModal';
import {ModalProps} from 'components/ui/Modal';
import {Comment} from 'types';
import {useDeleteCommentModal} from './DeleteCommentModal.hook';

type DeleteCommentModalProps = {comment: Comment} & ModalProps;

export function DeleteCommentModal({comment, isOpen, onClose}: DeleteCommentModalProps) {
    const {isLoading, handleSubmit} = useDeleteCommentModal({onClose, commentId: comment.id});

    return (
        <ConfirmModal
            onClose={onClose}
            isOpen={isOpen}
            className="max-w-2xl"
            title="Usuwanie komentarza"
            onSubmit={handleSubmit}
            isLoading={isLoading}
        >
            <h3 className="font-semibold">
                Czy chcesz usunąć komentarz <strong>{comment.name}</strong>?
            </h3>
        </ConfirmModal>
    );
}
