import {useCallback, useState} from 'react';
import {useAppSelector} from 'store';
import {useNavigate} from 'react-router-dom';
import {GetPostsArgs, useGetPostsQuery} from 'store/actions';
import {Post} from 'types';
import {PostItemView} from '../PostItemView';
import {DeletePostModal} from 'components/modal/DeletePostModal';

type PostListViewProps = {filters?: GetPostsArgs};

export function PostListView({filters}: PostListViewProps) {
    const navigate = useNavigate();
    const [selectedPost, setPost] = useState<Post>();
    const {user} = useAppSelector(state => state.auth);
    const {data, isLoading} = useGetPostsQuery(filters || {});

    const handleSelect = useCallback((post?: Post) => {
        setPost(post);
    }, []);

    if (!data || isLoading)
        return (
            <>
                {Array.from(Array(5).keys()).map((_, index) => (
                    <PostItemView key={index} />
                ))}
            </>
        );

    return (
        <>
            {data.map(post => {
                const additionalProps =
                    user && user.id === post.userId ? {onDelete: () => handleSelect(post)} : {};
                return (
                    <PostItemView
                        key={post.id}
                        data={post}
                        onShowMore={() => navigate(`/posts/${post.id}`)}
                        {...additionalProps}
                    />
                );
            })}
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
