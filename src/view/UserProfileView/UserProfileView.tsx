import Button from 'components/ui/Button';
import {EditUserDataModal} from 'components/modal/EditUserDataModal';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Sidebar} from 'components/layout/Layout';
import {UserBriefView} from 'components/posts/PostItemView/UserBriefView';
import {useUserProfileView} from './UserProfileView.hook';
import {PostListView} from 'components/posts/PostListView';
import {PhotoListView} from 'components/albums/PhotoListView';
import cx from 'classnames';
import {Tabs} from 'components/ui/Tab';

type PhotoType = 'post' | 'photo';

export function UserProfileView() {
    const [isOpen, setOpen] = useState(false);
    const {t} = useTranslation(['common', 'user']);
    const [feedType, setFeedType] = useState<PhotoType>('photo');

    const {user, isLoggedUserProfile} = useUserProfileView();

    const handleSetFeed = (type: PhotoType) => () => {
        setFeedType(type);
    };

    if (!user) {
        return <>User not found</>;
    }

    const isPost = feedType === 'post';

    return (
        <>
            <div className="flex">
                <section className="flex flex-auto flex-col py-12 pr-4">
                    <Tabs className="bg-black rounded-md mb-5 p-0.5">
                        <Button
                            variant="custom"
                            className={cx({
                                'bg-white': isPost,
                                'text-white': !isPost
                            })}
                            onClick={handleSetFeed('post')}
                        >
                            Posts
                        </Button>
                        <Button
                            variant="custom"
                            className={cx({
                                'bg-white': !isPost,
                                'text-white': isPost
                            })}
                            onClick={handleSetFeed('photo')}
                        >
                            Photos
                        </Button>
                    </Tabs>
                    {isPost ? (
                        <PostListView filters={{userId: user.id}} />
                    ) : (
                        <>
                            <PhotoListView userId={user?.id} filters={{}} />
                        </>
                    )}
                </section>
                <Sidebar>
                    <nav className="flex justify-between mb-2">
                        <h2 className="text-xl font-bold">{t('user:profile')}</h2>
                        {isLoggedUserProfile && (
                            <Button variant="primary" onClick={() => setOpen(true)}>
                                {t('common:edit')}
                            </Button>
                        )}
                    </nav>

                    <UserBriefView userId={user?.id} extendedView />
                </Sidebar>
            </div>
            {isLoggedUserProfile && (
                <EditUserDataModal isOpen={isOpen} user={user} onClose={() => setOpen(false)} />
            )}
        </>
    );
}
