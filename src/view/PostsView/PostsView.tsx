import {useCallback, useState} from 'react';
import {Sidebar} from 'components/layout/Layout';
import Button from 'components/ui/Button';
import {CreatePostModal} from 'components/modal/CreatePostModal';
import {useAppSelector} from 'store';
import {PostListView} from 'components/posts/PostListView';
import {UserBriefView} from 'components/posts/PostItemView/UserBriefView';

export function PostsView() {
    const [isOpenCreateModal, setOpenCreateModal] = useState(false);
    const {isAuthenticated, user} = useAppSelector(state => state.auth);

    const handleToggle = useCallback(() => {
        setOpenCreateModal(state => !state);
    }, []);

    return (
        <>
            <div className="flex w-full">
                <section className="flex flex-auto flex-col py-12 pr-4">
                    <div className="flex justify-between border-b pb-3">
                        <h2 className="text-normal font-semibold">Posts</h2>
                        {isAuthenticated && (
                            <Button variant="secondary" outline onClick={handleToggle}>
                                Create post
                            </Button>
                        )}
                    </div>

                    <PostListView />
                </section>
                <Sidebar>{!!user && <UserBriefView userId={user.id} extendedView />}</Sidebar>
            </div>
            {isOpenCreateModal && (
                <CreatePostModal isOpen={isOpenCreateModal} onClose={handleToggle} />
            )}
        </>
    );
}
