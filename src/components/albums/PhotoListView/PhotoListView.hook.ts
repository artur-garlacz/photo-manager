import {useEffect, useMemo, useState} from 'react';
import {useAppSelector} from 'store';
import {useGetAlbumsQuery, useGetPhotosQuery} from 'store/actions';
import {PhotoListViewProps} from './PhotoListView';

export function usePhotoListView({filters, userId}: PhotoListViewProps) {
    const {data: photos, isLoading: isLoadingPhotos} = useGetPhotosQuery(filters);
    const {data: albums} = useGetAlbumsQuery({userId});
    const itemsPerPage = 20;
    const [hasMore, setHasMore] = useState(true);
    const [records, setRecords] = useState(itemsPerPage);
    const user = useAppSelector(state => state.auth.user);

    const filteredPhotos = useMemo(() => {
        if (!photos) return [];

        if (!userId || !albums) return photos;

        return photos.filter(photo => albums.some(album => album.id === photo.albumId));
    }, [albums, photos, userId]);

    useEffect(() => {
        setRecords(filteredPhotos && filteredPhotos?.length < 20 ? filteredPhotos?.length : 20);
    }, [filteredPhotos]);

    const loadMore = () => {
        if (records >= filteredPhotos.length) {
            setHasMore(false);
        } else {
            const restItemsCount = filteredPhotos?.length - records;
            const nextPageRecords =
                restItemsCount < itemsPerPage ? restItemsCount : itemsPerPage;
            setTimeout(() => {
                setRecords(records + nextPageRecords);
            }, 1000);
        }
    };

    return {
        loadMore,
        photos: filteredPhotos,
        isLoadingPhotos,
        records,
        albums: albums || [],
        hasMore,
        user
    };
}
