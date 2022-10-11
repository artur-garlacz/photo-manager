import {useFormik} from 'formik';
import {useUpdateUserMutation} from 'store/actions/users';
import {User} from 'types';
import {object, string} from 'yup';

type Props = {
    onClose: () => void;
    user: User;
};

export function useEditUserDataModal({onClose, user}: Props) {
    const [updateUser, {isLoading}] = useUpdateUserMutation();

    const validationSchema = object({
        name: string().required(),
        username: string().required(),
        email: string().email().required(),
        phone: string().required(),
        website: string().required(),
        address: object({
            city: string().required(),
            street: string().required(),
            zipcode: string().required()
        }),
        company: object({
            name: string().required(),
            bs: string().required(),
            catchPhrase: string().required()
        })
    });

    const {id, ...initialValues} = user;

    const {values, touched, errors, handleSubmit, handleChange} = useFormik({
        initialValues: {
            ...initialValues
        },
        validationSchema,
        onSubmit: async (payload, {setErrors}) => {
            try {
                await updateUser({...payload, id});
                onClose();
                // toast.success(t('disputeSubmitted'));
            } catch (err) {
                // if (err.message) {
                //     // toast.error(err.message);
                // }
                // setErrors(err.errors ?? {});
            }
        }
    });

    return {isLoading, values, touched, errors, handleSubmit, handleChange};
}
