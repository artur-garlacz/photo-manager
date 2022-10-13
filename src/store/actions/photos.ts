import {api} from 'services/api';
import {Photo} from 'types';

export const photosApi = api.injectEndpoints({
    endpoints: build => ({
        getPhotos: build.query<Photo[], void>({
            query: () => ({url: 'photos'}),
            providesTags: result =>
                result
                    ? [
                          ...result.map(({id}) => ({type: 'Photos', id} as const)),
                          {type: 'Photos', id: 'LIST'}
                      ]
                    : [{type: 'Photos', id: 'LIST'}]
        })
    })
});

export const {useGetPhotosQuery} = photosApi;
