import {GetPhotosArgs, useGetPhotosQuery} from 'store/actions/photos';
import {PhotoItemView} from './PhotoItemView';
import {Photo} from 'types';
import {useCallback, useEffect, useState} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {useAppSelector} from 'store';
import {DeletePhotoModal} from 'components/modal/DeletePhotoModal';
import {useGetAlbumsQuery} from 'store/actions';

type PhotoListViewProps = {
    filters: GetPhotosArgs;
};

export function PhotoListView({filters}: PhotoListViewProps) {
    const {data: photos, isLoading} = useGetPhotosQuery(filters);
    const {data: albums} = useGetAlbumsQuery({});
    const itemsPerPage = 20;
    const [selectedPhoto, setPhoto] = useState<Photo>();
    const [hasMore, setHasMore] = useState(true);
    const [records, setRecords] = useState(itemsPerPage);
    const user = useAppSelector(state => state.auth.user);

    useEffect(() => {
        setRecords(photos && photos?.length < 20 ? photos?.length : 20);
    }, [photos, filters]);

    const handleSelect = useCallback((photo?: Photo) => {
        setPhoto(photo);
    }, []);

    const loadMore = () => {
        if (!photos) return;

        if (records >= photos.length) {
            setHasMore(false);
        } else {
            const nextPageRecords =
                photos?.length - records < itemsPerPage
                    ? photos?.length - records
                    : itemsPerPage;
            setTimeout(() => {
                setRecords(records + nextPageRecords);
            }, 1000);
        }
    };

    const showItems = (photos: Photo[]) => {
        const items = [];
        for (let i = 0; i < records; i++) {
            if (photos.length >= records) {
                const item = photos[i];

                const findAlbum = albums?.find(
                    album => !!user && album.userId === user.id && album.id === item.albumId
                );

                const additionalProps = findAlbum
                    ? {
                          onDelete: () => handleSelect(item)
                      }
                    : {};

                items.push(<PhotoItemView key={item.id} data={item} {...additionalProps} />);
            }
        }
        return items;
    };

    if (!photos || isLoading || !photos.length) {
        return <>No data</>;
    }

    return (
        <>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadMore}
                hasMore={hasMore}
                loader={
                    <h4 key={0} className="loader">
                        Loading...
                    </h4>
                }
            >
                {showItems(photos)}
            </InfiniteScroll>
            {!!selectedPhoto && (
                <DeletePhotoModal
                    photoId={selectedPhoto.id}
                    isOpen={!!selectedPhoto}
                    onClose={() => handleSelect()}
                />
            )}
        </>
    );
}
