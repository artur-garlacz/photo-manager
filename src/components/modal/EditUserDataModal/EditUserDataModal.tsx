import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import {Modal, ModalProps} from 'components/ui/Modal';

type EditUserDataModalProps = ModalProps;

export function EditUserDataModal({isOpen, onClose}: EditUserDataModalProps) {
    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            className="max-w-2xl"
            title="Payment successful"
        >
            <form className="flex flex-col">
                <div className="bg-gray-100 mt-6 p-4 rounded-md">
                    <h3 className="font-semibold">Personal info</h3>
                    <div className={'grid lg:grid-cols-2 gap-x-6 gap-y-2 mt-2'}>
                        <Input id={'name'} name={'name'} label={'nazwa'} />
                        <Input id={'username'} name={'username'} label={'Nazwa użytkownika'} />
                        <Input id={'email'} name={'email'} label={'email'} />
                        <Input id={'phone'} name={'phone'} label={'phone'} />
                        <Input id={'website'} name={'website'} label={'website'} />
                    </div>
                </div>
                <div className="bg-gray-100 mt-6 p-4 rounded-md">
                    <h3 className="font-semibold">Address</h3>
                    <div className={'grid lg:grid-cols-2 gap-x-6 gap-y-2 mt-2'}>
                        <Input id={'address.city'} name={'address.city'} label={'city'} />
                        <Input id={'address.street'} name={'address.street'} label={'street'} />
                        <Input
                            id={'address.zipcode'}
                            name={'address.zipcode'}
                            label={'zipcode'}
                        />
                    </div>
                </div>

                <div className="bg-gray-100 mt-6 p-4 rounded-md">
                    <h3 className="font-semibold">Company</h3>
                    <div className={'grid lg:grid-cols-2 gap-x-6 gap-y-2 mt-2'}>
                        <Input id={'company.name'} name={'company.name'} label={'name'} />
                        <Input id={'company.bs'} name={'company.bs'} label={'bs'} />
                        <Input
                            id={'company.catchPhrase'}
                            name={'company.catchPhrase'}
                            label={'catchPhrase'}
                        />
                    </div>
                </div>

                {/* <div className="flex gap-x-4">
                    <Input id={'name'} name={'name'} className={'mt-2'} label={'nazwa'} />

                    <Input
                        id={'username'}
                        name={'username'}
                        className={'mt-2'}
                        label={'Nazwa użytkownika'}
                    />
                    <Input id={'email'} name={'email'} className={'mt-2'} label={'email'} />
                    <Input id={'phone'} name={'phone'} className={'mt-2'} label={'phone'} />
                    <Input
                        id={'website'}
                        name={'website'}
                        className={'mt-2'}
                        label={'website'}
                    />
                </div> */}
                {/* <div className="flex-1">
                    <Input
                        id={'address.city'}
                        name={'address.city'}
                        className={'mt-2'}
                        label={'city'}
                    />
                </div> */}
                <div className="flex justify-end mt-4">
                    <Button variant="secondary" className="mr-2" outline onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={onClose}>Save</Button>
                </div>
            </form>
        </Modal>
    );
}
