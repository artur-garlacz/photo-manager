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

    const {values, touched, errors, handleSubmit, handleChange} = useFormik({
        initialValues: {
            name: '',
            body: ''
        },
        validationSchema,
        onSubmit: async payload => {
            try {
                await createComment({...payload, postId});
                onClose();
            } catch (err) {}
        }
    });

    return {isLoading, values, touched, errors, handleSubmit, handleChange};
}
