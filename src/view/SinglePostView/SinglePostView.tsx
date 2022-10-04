import {PostItemView} from 'components/posts/PostItemView/PostItemView';
import {useSinglePostView} from './SinglePostView.hook';

export function SinglePostView() {
    const {post, comments, isLoadingPost, isLoadingComments} = useSinglePostView();

    if (isLoadingPost || !post) {
        return (
            <>
                <PostItemView isLoading />
            </>
        );
    }

    return (
        <section className="flex flex-col p-2">
            <PostItemView data={post} />
        </section>
    );
}
