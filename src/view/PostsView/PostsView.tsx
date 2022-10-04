import {PostItemView} from 'components/posts/PostItemView/PostItemView';
import {useMemo} from 'react';
import {useGetPostsQuery} from 'store/actions/posts';

export function PostsView() {
    const {data, isLoading} = useGetPostsQuery();

    const postsList = useMemo(() => {
        if (!data) return <></>;

        return data.map(post => <PostItemView key={post.id} data={post} />);
    }, [data]);

    if (isLoading) {
        return (
            <>
                {new Array(3).map((_, index) => (
                    <PostItemView key={index} isLoading />
                ))}
            </>
        );
    }

    return <section className="flex flex-col p-2">{postsList}</section>;
}
