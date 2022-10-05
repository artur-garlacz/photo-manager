import {CommentItemView} from 'components/posts/CommentListView/CommentItemView';
import {PostItemView} from 'components/posts/PostItemView';
import {useSinglePostView} from './SinglePostView.hook';

export function SinglePostView() {
    const {post, comments, isLoadingPost, isLoadingComments} = useSinglePostView();

    if (isLoadingPost || !post) {
        return (
            <>
                <PostItemView />
            </>
        );
    }

    return (
        <section className="flex flex-col p-2">
            <PostItemView data={post} />
            {comments && !!comments.length && <CommentItemView />}
        </section>
    );
}
