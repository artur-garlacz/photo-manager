import {useFormik} from 'formik';
import {Comment} from 'types';
import {object, string} from 'yup';
import {useCreateCommentMutation} from 'store/actions/comments';

type Props = {
    onClose: () => void;
    postId: Comment['postId'];
};

export function useCreateCommentModal({onClose, postId}: Props) {
    const [createComment, {isLoading}] = useCreateCommentMutation();

    const validationSchema = object({
        title: string().min(3).required(),
        body: string().min(3).required()
    });

    // userId: number;
    // id: number;

    const {values, touched, errors, handleSubmit, handleChange} = useFormik({
        initialValues: {
            name: '',
            body: ''
        },
        validationSchema,
        onSubmit: async (payload, {setErrors}) => {
            try {
                await createComment({...payload, postId});
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
