import {useGetPhotosQuery} from 'store/actions/photos';
import {PhotoItemView} from './PhotoItemView';

export function PhotoListView() {
    const {data, isLoading} = useGetPhotosQuery();

    if (!data || isLoading) {
        return <></>;
    }

    return (
        <div className="grid lg:grid-cols-3 justify-center pt-4 gap-4">
            {data.map(photo => (
                <PhotoItemView data={photo} />
            ))}
        </div>
    );
}
