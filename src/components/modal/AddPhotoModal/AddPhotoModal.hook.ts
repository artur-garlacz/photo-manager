import {useFormik} from 'formik';
import {number, object, string} from 'yup';
import {useGetAlbumsQuery} from 'store/actions/albums';
import {useCreatePhotoMutation} from 'store/actions/photos';
import {useMemo} from 'react';
import {SelectOption} from 'types/common';

type Props = {
    onClose: () => void;
};

export function useAddPhotoModal({onClose}: Props) {
    const [createPhoto, {isLoading}] = useCreatePhotoMutation();
    const {data: albums} = useGetAlbumsQuery({});

    const albumOptions: Array<SelectOption<number>> = useMemo(() => {
        return albums?.map(album => ({label: album.title, value: album.id})) || [];
    }, [albums]);

    const validationSchema = object({
        title: string().min(3).required(),
        url: string().min(3).required(),
        thumbnailUrl: string().min(3).required(),
        albumId: number().required()
    });

    const {values, touched, errors, setFieldValue, handleSubmit, handleChange} = useFormik({
        initialValues: {
            title: '',
            url: '',
            thumbnailUrl: '',
            albumId: 0
        },
        validationSchema,
        onSubmit: async (payload, {setErrors}) => {
            try {
                await createPhoto(payload);
                onClose();
            } catch (err) {}
        }
    });

    return {
        isLoading,
        values,
        touched,
        errors,
        setFieldValue,
        handleSubmit,
        handleChange,
        albumOptions
    };
}
