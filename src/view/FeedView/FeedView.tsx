import cx from 'classnames';
import {AlbumListView} from 'components/albums/AlbumListView';
import {PhotoListView} from 'components/albums/PhotoListView';
import {Sidebar} from 'components/layout/Layout';
import {AddPhotoModal} from 'components/modal/AddPhotoModal';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import {Tabs} from 'components/ui/Tab/Tab';
import React, {useCallback, useState} from 'react';
import {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {GetAlbumsArgs} from 'store/actions';
import {GetPhotosArgs} from 'store/actions/photos';

type FeedType = 'album' | 'photo';

export function FeedView() {
    const [isOpenCreateModal, setOpenCreateModal] = useState(false);
    const [feedType, setFeedType] = useState<FeedType>('photo');
    const [searchParams, setSearchParams] = useSearchParams();

    const [filters, setFilters] = useState<GetPhotosArgs & GetAlbumsArgs>({});

    useEffect(() => {
        const albumId = Number(searchParams.get('albumId'));
        if (!albumId || isNaN(albumId)) return;
        setFilters(state => ({...state, albumId}));
        setFeedType('photo');
    }, [searchParams]);

    const handleToggle = useCallback(() => {
        setOpenCreateModal(state => !state);
    }, []);

    const handleChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => {
        setFilters(state => ({...state, [name]: value || undefined}));
        if (!value && !!searchParams.get(name)) {
            searchParams.delete(name);
            setSearchParams({...searchParams});
        }
    };

    const handleSetFeed = (type: FeedType) => () => {
        setFeedType(type);
    };

    const isAlbum = feedType === 'album';

    return (
        <div className="flex flex-grow h-full overflow-y-hidden">
            <section className="flex flex-auto flex-col py-12 pr-4">
                <Tabs className="bg-black rounded-md mb-5 p-0.5">
                    <Button
                        variant="custom"
                        className={cx({
                            'bg-white': !isAlbum,
                            'text-white': isAlbum
                        })}
                        onClick={handleSetFeed('photo')}
                    >
                        Zdjęcia
                    </Button>
                    <Button
                        variant="custom"
                        className={cx({
                            'bg-white': isAlbum,
                            'text-white': !isAlbum
                        })}
                        onClick={handleSetFeed('album')}
                    >
                        Albumy
                    </Button>
                </Tabs>
                {isAlbum ? (
                    <AlbumListView filters={{userId: filters?.userId}} />
                ) : (
                    <>
                        <div>
                            <Button variant="secondary" outline onClick={handleToggle}>
                                Add photo
                            </Button>
                        </div>
                        <PhotoListView filters={filters} />
                    </>
                )}
                {isOpenCreateModal && (
                    <AddPhotoModal isOpen={isOpenCreateModal} onClose={handleToggle} />
                )}
            </section>
            <Sidebar>
                <div className="flex items-center justify-between border-b h-12 pb-3">
                    <h2 className="text-normal font-semibold">Filters</h2>
                </div>
                <div className="flex flex-col gap-y-4 pt-4">
                    {isAlbum ? (
                        <Input
                            label="Id użytkownika"
                            name="userId"
                            value={filters?.userId || ''}
                            onChange={handleChange}
                        />
                    ) : (
                        <>
                            <Input
                                type="number"
                                label="Id albumu"
                                name="albumId"
                                onChange={handleChange}
                                value={filters?.albumId || ''}
                            />
                            <Input
                                label="Id zdjęcia"
                                name="id"
                                type="number"
                                value={filters?.id || ''}
                                onChange={handleChange}
                            />
                        </>
                    )}
                </div>
            </Sidebar>
        </div>
    );
}
