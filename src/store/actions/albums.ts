import {api} from 'services/api';
import {Album} from 'types';

export type GetAlbumsArgs = Partial<Pick<Album, 'userId'>>;

export const albumsApi = api.injectEndpoints({
    endpoints: build => ({
        getAlbums: build.query<Album[], GetAlbumsArgs>({
            query: (params: GetAlbumsArgs) => ({url: 'albums', params}),
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
