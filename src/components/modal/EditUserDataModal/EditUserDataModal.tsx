import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import {Modal, ModalProps} from 'components/ui/Modal';
import {User} from 'types';
import {useEditUserDataModal} from './EditUserDataModal.hook';

type EditUserDataModalProps = ModalProps & {user: User};

export function EditUserDataModal({isOpen, user, onClose}: EditUserDataModalProps) {
    const {isLoading, values, handleSubmit, handleChange} = useEditUserDataModal({
        onClose,
        user
    });

    return (
        <Modal onClose={onClose} isOpen={isOpen} maxSize="3xl" title="User data">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="bg-gray-100 mt-6 p-4 rounded-md">
                    <h3 className="font-semibold">Personal info</h3>
                    <div className={'grid lg:grid-cols-2 gap-x-6 gap-y-2 mt-2'}>
                        <Input
                            id={'name'}
                            name={'name'}
                            label={'nazwa'}
                            value={values.name}
                            onChange={handleChange}
                        />
                        <Input
                            id={'username'}
                            name={'username'}
                            label={'Nazwa użytkownika'}
                            value={values.username}
                            onChange={handleChange}
                        />
                        <Input
                            id={'email'}
                            name={'email'}
                            label={'email'}
                            value={values.email}
                            onChange={handleChange}
                        />
                        <Input
                            id={'phone'}
                            name={'phone'}
                            label={'phone'}
                            value={values.phone}
                            onChange={handleChange}
                        />
                        <Input
                            id={'website'}
                            name={'website'}
                            label={'website'}
                            value={values.website}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="bg-gray-100 mt-6 p-4 rounded-md">
                    <h3 className="font-semibold">Address</h3>
                    <div className={'grid lg:grid-cols-2 gap-x-6 gap-y-2 mt-2'}>
                        <Input
                            id={'address.city'}
                            name={'address.city'}
                            label={'city'}
                            value={values.address.city}
                            onChange={handleChange}
                        />
                        <Input
                            id={'address.street'}
                            name={'address.street'}
                            label={'street'}
                            value={values.address.street}
                            onChange={handleChange}
                        />
                        <Input
                            id={'address.zipcode'}
                            name={'address.zipcode'}
                            label={'zipcode'}
                            value={values.address.zipcode}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="bg-gray-100 mt-6 p-4 rounded-md">
                    <h3 className="font-semibold">Company</h3>
                    <div className={'grid lg:grid-cols-2 gap-x-6 gap-y-2 mt-2'}>
                        <Input
                            id={'company.name'}
                            name={'company.name'}
                            label={'name'}
                            value={values.company.name}
                            onChange={handleChange}
                        />
                        <Input
                            id={'company.bs'}
                            name={'company.bs'}
                            label={'bs'}
                            value={values.company.bs}
                            onChange={handleChange}
                        />
                        <Input
                            id={'company.catchPhrase'}
                            name={'company.catchPhrase'}
                            label={'catchPhrase'}
                            value={values.company.catchPhrase}
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
