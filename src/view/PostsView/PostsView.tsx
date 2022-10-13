import {DeletePostModal} from 'components/modal/DeletePostModal';
import {PostItemView} from 'components/posts/PostItemView';
import {useCallback, useMemo, useState} from 'react';
import {useGetPostsQuery} from 'store/actions/posts';
import {useNavigate} from 'react-router-dom';
import {Post} from 'types';
import {Sidebar} from 'components/layout/Layout';
import Button from 'components/ui/Button';
import {CreatePostModal} from 'components/modal/CreatePostModal';

export function PostsView() {
    const [isOpenCreateModal, setOpenCreateModal] = useState(false);
    const [selectedPost, setPost] = useState<Post>();
    const navigate = useNavigate();
    const {data, isLoading} = useGetPostsQuery();

    const handleSelect = useCallback((post?: Post) => {
        setPost(post);
    }, []);

    const handleToggle = useCallback(() => {
        setOpenCreateModal(state => !state);
    }, []);

    const postsList = useMemo(() => {
        if (!data || isLoading)
            return (
                <>
                    {Array.from(Array(5).keys()).map((_, index) => (
                        <PostItemView key={index} />
                    ))}
                </>
            );

        return data.map(post => (
            <PostItemView
                key={post.id}
                data={post}
                onDelete={() => handleSelect(post)}
                onShowMore={() => navigate(`/posts/${post.id}`)}
            />
        ));
    }, [data, handleSelect, isLoading, navigate]);

    return (
        <>
            <div className="flex w-full">
                <section className="flex flex-auto flex-col py-12 pr-4">
                    <div className="flex justify-between border-b pb-3">
                        <h2 className="text-normal font-semibold">Posts</h2>
                        <Button variant="secondary" outline onClick={handleToggle}>
                            Create post
                        </Button>
                    </div>

                    {postsList}
                </section>
                <Sidebar>c</Sidebar>
            </div>
            {isOpenCreateModal && (
                <CreatePostModal isOpen={isOpenCreateModal} onClose={handleToggle} />
            )}
            {!!selectedPost && (
                <DeletePostModal
                    post={selectedPost}
                    isOpen={!!selectedPost}
                    onClose={() => handleSelect()}
                />
            )}
        </>
    );
}
