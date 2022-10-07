import {CommentListView} from 'components/posts/CommentListView';
import {PostItemView} from 'components/posts/PostItemView';
import {useMemo, useState} from 'react';
import {useGetPostsQuery} from 'store/actions/posts';
import {Post} from 'types';

export function PostsView() {
    const [selectedPost, setPost] = useState<Post['id']>();
    const {data, isLoading} = useGetPostsQuery();

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
                selectedPost={selectedPost}
                data={post}
                onClick={() => setPost(post.id)}
            />
        ));
    }, [selectedPost, data, isLoading]);

    return (
        <>
            <section className="flex xl:max-w-3xl flex-col p-2">
                <PostItemView />
                {postsList}
            </section>
            <aside className="none xl:fixed w-1/4 right-0 top-10 overflow-y-auto flex-1 border-l-1 border-b-gray-200">
                {selectedPost && <CommentListView postId={selectedPost} />}
            </aside>
        </>
    );
}
