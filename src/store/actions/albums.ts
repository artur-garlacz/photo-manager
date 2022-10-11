import {api} from 'services/api';
import {Album} from 'types';

export const albumsApi = api.injectEndpoints({
    endpoints: build => ({
        getAlbums: build.query<Album[], void>({
            query: () => ({url: 'albums'}),
            providesTags: result =>
                result
                    ? [
                          ...result.map(({id}) => ({type: 'Albums', id} as const)),
                          {type: 'Albums', id: 'LIST'}
                      ]
                    : [{type: 'Albums', id: 'LIST'}]
        })
    })
});

export const {useGetAlbumsQuery} = albumsApi;
