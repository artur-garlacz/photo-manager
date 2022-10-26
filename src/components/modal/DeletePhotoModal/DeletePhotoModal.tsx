import {ConfirmModal} from 'components/ui/ConfirmModal';
import {ModalProps} from 'components/ui/Modal';
import {Photo} from 'types';
import {useDeletePhotoModal} from './DeletePhotoModal.hook';

type DeletePhotoModalProps = {photoId: Photo['id']} & ModalProps;

export function DeletePhotoModal({photoId, isOpen, onClose}: DeletePhotoModalProps) {
    const {isLoading, handleSubmit} = useDeletePhotoModal({onClose, photoId});

    return (
        <ConfirmModal
            onClose={onClose}
            isOpen={isOpen}
            className="max-w-2xl"
            title="Usuwanie zdjęcia"
            onSubmit={handleSubmit}
            isLoading={isLoading}
        >
            <h3 className="font-semibold">Czy chcesz usunąć zdjęcie?</h3>
        </ConfirmModal>
    );
}
