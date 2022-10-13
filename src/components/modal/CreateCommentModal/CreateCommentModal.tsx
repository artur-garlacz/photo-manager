import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import {Modal, ModalProps} from 'components/ui/Modal';
import {Comment} from 'types';
import {useCreateCommentModal} from './CreateCommentModal.hook';

type CreateCommentModalProps = ModalProps & Pick<Comment, 'postId'>;

export function CreateCommentModal({isOpen, onClose, postId}: CreateCommentModalProps) {
    const {isLoading, values, handleSubmit, handleChange} = useCreateCommentModal({
        onClose,
        postId
    });

    return (
        <Modal onClose={onClose} isOpen={isOpen} className="max-w-2xl" title="Create comment">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="bg-gray-100 mt-6 p-4 rounded-md">
                    <h3 className="font-semibold">Comment content</h3>
                    <div className={'flex flex-col pt-4 gap-y-4'}>
                        <Input
                            id={'title'}
                            name={'title'}
                            label={'title'}
                            value={values.name}
                            onChange={handleChange}
                        />
                        <Input
                            id={'body'}
                            name={'body'}
                            label={'body'}
                            value={values.body}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="flex justify-end mt-4">
                    <Button
                        disabled={isLoading}
                        variant="secondary"
                        className="mr-2"
                        outline
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button disabled={isLoading} type="submit">
                        Save
                    </Button>
                </div>
            </form>
        </Modal>
    );
}
