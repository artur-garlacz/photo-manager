import {CommentListView} from 'components/posts/CommentListView';
import {PostItemView} from 'components/posts/PostItemView';
import {useSinglePostView} from './SinglePostView.hook';
import randomImage from 'assets/images/city-random.jpg';
import {UserBriefView} from 'components/posts/PostItemView/UserBriefView';
import {Sidebar} from 'components/layout/Layout';

export function SinglePostView() {
    const {post, isLoading} = useSinglePostView();

    if (isLoading || !post) {
        return (
            <>
                <PostItemView />
            </>
        );
    }

    const {title, body, userId} = post;

    return (
        <div className="flex">
            <section className="flex flex-auto flex-col py-12 pr-4">
                <h2 className="font-semibold text-left text-5xl pb-4">{title}</h2>
                <p className="lg:w-2/3 text-xs text-gray-500 pb-3">{body}</p>
                <img className="w-full rounded-md" src={randomImage} alt={title} />
                <CommentListView postId={post.id} />
            </section>
            <Sidebar>
                <UserBriefView userId={userId} extendedView />
            </Sidebar>
        </div>
    );
}
