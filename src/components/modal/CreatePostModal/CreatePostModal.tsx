import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import {Modal, ModalProps} from 'components/ui/Modal';
import {useCreatePostModal} from './CreatePostModal.hook';

type CreatePostModalProps = ModalProps;

export function CreatePostModal({isOpen, onClose}: CreatePostModalProps) {
    const {isLoading, values, handleChange} = useCreatePostModal({onClose});

    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            className="max-w-2xl"
            title="Payment successful"
        >
            <form className="flex flex-col">
                <div className="bg-gray-100 mt-6 p-4 rounded-md">
                    <h3 className="font-semibold">Post content</h3>
                    <div className={'grid lg:grid-cols-2 gap-x-6 gap-y-2 mt-2'}>
                        <Input
                            id={'title'}
                            name={'title'}
                            label={'title'}
                            value={values.title}
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
                    <Button disabled={isLoading} onClick={onClose}>
                        Save
                    </Button>
                </div>
            </form>
        </Modal>
    );
}
