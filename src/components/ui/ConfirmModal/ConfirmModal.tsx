import Button from '../Button';
import {Modal, ModalArgs, ModalProps} from '../Modal';

type ConfirmModalProps = {
    title?: string;
    isLoading?: boolean;
    onSubmit: () => void;
} & ModalProps &
    ModalArgs;

export function ConfirmModal({
    onSubmit,
    onClose,
    title,
    isLoading,
    children,
    ...props
}: ConfirmModalProps) {
    return (
        <Modal title={title || 'Potwierdzenie akcji'} onClose={onClose} {...props}>
            <div className="flex flex-col">
                <div className="bg-gray-100 mt-6 p-4 rounded-md">{children}</div>

                <div className="flex justify-end mt-4" onClick={onClose}>
                    <Button
                        disabled={isLoading}
                        variant="secondary"
                        type="button"
                        className="mr-2"
                        outline
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button disabled={isLoading} onClick={onSubmit}>
                        Save
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
