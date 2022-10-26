import {GetAlbumsArgs, useGetAlbumsQuery} from 'store/actions';
import {AlbumItemView} from './AlbumItemView';

type AlbumListViewProps = {
    filters: GetAlbumsArgs;
};

export function AlbumListView({filters}: AlbumListViewProps) {
    const {data: albums, isLoading} = useGetAlbumsQuery(filters);

    return (
        <div className="grid grid-cols-3 gap-2">
            {albums?.map(album => <AlbumItemView key={album.id} data={album} />) || []}
        </div>
    );
}
