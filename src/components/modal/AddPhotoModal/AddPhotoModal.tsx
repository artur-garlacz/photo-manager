import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import {Modal, ModalProps} from 'components/ui/Modal';
import Select from 'react-select';
import {useAddPhotoModal} from './AddPhotoModal.hook';

type AddPhotoModalProps = ModalProps;

export function AddPhotoModal({isOpen, onClose}: AddPhotoModalProps) {
    const {albumOptions, values, setFieldValue, handleChange, handleSubmit, isLoading} =
        useAddPhotoModal({
            onClose
        });
    return (
        <Modal onClose={onClose} isOpen={isOpen} className="max-w-2xl" title="Create photo">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="bg-gray-100 mt-6 p-4 rounded-md">
                    <h3 className="font-semibold">Photo data</h3>
                    <div className={'flex flex-col pt-4 gap-y-4'}>
                        <Select
                            id={'albumId'}
                            name={'albumId'}
                            className={'w-full'}
                            options={albumOptions}
                            onChange={option => setFieldValue('albumId', option?.value)}
                        />

                        <Input
                            id={'title'}
                            name={'title'}
                            label={'title'}
                            value={values.title}
                            onChange={handleChange}
                        />
                        <Input
                            id={'thumbnailUrl'}
                            name={'thumbnailUrl'}
                            label={'thumbnailUrl'}
                            value={values.thumbnailUrl}
                            onChange={handleChange}
                        />
                        <Input
                            id={'url'}
                            name={'url'}
                            label={'url'}
                            value={values.url}
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
