import Button from 'components/ui/Button';
import ContentLoader from 'react-content-loader';
import {Post} from 'types';
import cx from 'classnames';
import {UserBriefView} from './UserBriefView';

type PostItemViewProps = {data?: Post; selectedPost?: Post['id']; onClick?: () => void};

export function PostItemView({selectedPost, data, onClick}: PostItemViewProps) {
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
                'flex flex-col items-start w-full my-4 px-4 p-5 border-b-gray-200 border-b-1',
                {'bg-gray-200': selectedPost === id}
            )}
        >
            <h2 className="font-semibold text-left text-lg pb-2">{title}</h2>
            <p className="lg:w-4/5 text-xs text-gray-500">{body}</p>
            <div className="w-full flex justify-between mt-3">
                <div className="flex items-center">
                    <UserBriefView userId={userId} />
                </div>
                <Button onClick={onClick} variant="secondary" className="text-xs font-semibold">
                    See comments
                </Button>
            </div>
        </article>
    );
}
