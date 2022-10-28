import {GetPhotosArgs} from 'store/actions/photos';
import {PhotoItemView} from './PhotoItemView';
import {Photo} from 'types';
import {useCallback, useState} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {DeletePhotoModal} from 'components/modal/DeletePhotoModal';
import {usePhotoListView} from './PhotoListView.hook';

export type PhotoListViewProps = {
    filters: GetPhotosArgs;
    userId?: number;
};

export function PhotoListView(props: PhotoListViewProps) {
    const [selectedPhoto, setPhoto] = useState<Photo>();
    const {loadMore, photos, isLoadingPhotos, records, hasMore, albums, user} =
        usePhotoListView(props);

    const handleSelect = useCallback((photo?: Photo) => {
        setPhoto(photo);
    }, []);

    const showItems = (photos: Photo[]) => {
        const items = [];
        for (let i = 0; i < records; i++) {
            if (photos.length >= records) {
                const item = photos[i];

                const findAlbum = albums.find(
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

    if (!photos || isLoadingPhotos || !photos.length) {
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
