import Button from 'components/ui/Button';
import ContentLoader from 'react-content-loader';
import {Post} from 'types';
import cx from 'classnames';
import {UserBriefView} from './UserBriefView';
import randomImage from 'assets/images/city-random.jpg';

type PostItemViewProps = {
    data?: Post;
    selectedPost?: Post['id'];
    onDelete?: () => void;
    onShowMore?: () => void;
};

export function PostItemView({selectedPost, data, onDelete, onShowMore}: PostItemViewProps) {
    if (!data) {
        return (
            <ContentLoader
                speed={2}
                className="flex flex-col items-start my-4 px-4 p-5 border-b-gray-200 border-b-1"
                height={160}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect className="w-2/3" height="22" />
                <rect x="0" y="40" rx="3" ry="3" width="410" height="10" />
                <rect x="0" y="54" rx="3" ry="3" width="350" height="10" />
                <circle cx="15" cy="90" r="15" />
                <rect x="40" y="85" rx="3" ry="3" width="15" height="12" />
                <rect x="60" y="85" rx="3" ry="3" width="50" height="12" />
            </ContentLoader>
        );
    }

    const {title, body, userId, id} = data;

    return (
        <article
            className={cx(
                'flex justify-between w-full my-4 pr-4 py-10 border-b-gray-200 border-b-1',
                {'bg-gray-200': selectedPost === id}
            )}
        >
            <div>
                <div className="flex justify-start w-full items-center pb-2">
                    <h2 className="font-semibold text-left text-xl mr-2">{title}</h2>
                </div>
                <p className="lg:w-4/5 text-xs text-gray-500 pb-3">{body}</p>
                <div className="flex">
                    <Button
                        onClick={onShowMore}
                        variant="secondary"
                        className="text-xs font-bold px-0 justify-start"
                    >
                        See more
                    </Button>
                    {!!onDelete && (
                        <Button
                            onClick={onDelete}
                            variant="secondary"
                            className="ml-2 text-xs font-bold"
                        >
                            Delete post
                        </Button>
                    )}
                </div>
                <div className="w-full flex justify-between mt-3">
                    <div className="flex items-center">
                        <UserBriefView userId={userId} />
                    </div>
                </div>
            </div>
            <img className="w-1/3 rounded-md" src={randomImage} alt={title} />
        </article>
    );
}
