import {useFormik} from 'formik';
import {object, string} from 'yup';
import {useCreatePostMutation} from 'store/actions/posts';
import {useAppSelector} from 'store';

type Props = {
    onClose: () => void;
};

export function useCreatePostModal({onClose}: Props) {
    const [createPost, {isLoading}] = useCreatePostMutation();

    const user = useAppSelector(state => state.auth.user);

    const validationSchema = object({
        title: string().min(3).required(),
        body: string().min(3).required()
    });

    const {values, touched, errors, handleSubmit, handleChange} = useFormik({
        initialValues: {
            title: '',
            body: ''
        },
        validationSchema,
        onSubmit: async (payload, {setErrors}) => {
            try {
                if (!user) return;
                await createPost({...payload, userId: user.id});
                onClose();
            } catch (err: any) {
                setErrors(err.errors ?? {});
            }
        }
    });

    return {isLoading, values, touched, errors, handleSubmit, handleChange};
}
