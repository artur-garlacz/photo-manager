import {useFormik} from 'formik';
import {Post} from 'types';
import {object, string} from 'yup';
import {useCreatePostMutation} from 'store/actions/posts';

type Props = {
    onClose: () => void;
};

export function useCreatePostModal({onClose}: Props) {
    const [createPost, {isLoading}] = useCreatePostMutation();

    const userId = 0;

    const validationSchema = object({
        title: string().min(3).required(),
        body: string().min(3).required()
    });

    // userId: number;
    // id: number;

    const {values, touched, errors, handleSubmit, handleChange} = useFormik({
        initialValues: {
            title: '',
            body: ''
        },
        validationSchema,
        onSubmit: async (payload, {setErrors}) => {
            try {
                await createPost({...payload, userId});
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
