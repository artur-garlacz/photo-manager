import Button from 'components/ui/Button';
import {Post} from 'types';
import {UserBriefView} from './UserBriefView';

type PostItemViewProps =
    | {
          data: Post;
          isLoading?: false;
      }
    | {data?: undefined; isLoading: true};

export function PostItemView({isLoading, data}: PostItemViewProps) {
    if (isLoading || !data) {
        return <></>;
    }

    const {title, body, userId} = data;

    return (
        <article className="flex flex-col items-start w-100 lg:max-w-2xl my-4 px-4 p-5 border-b-gray-200 border-b-1">
            <h2 className="font-semibold text-left text-lg pb-2">{title}</h2>
            <p className="lg:w-4/5 text-xs text-gray-500">{body}</p>
            <div className="w-full flex justify-between mt-3">
                <div className="flex items-center">
                    <UserBriefView userId={userId} />
                </div>
                <Button variant="secondary" className="text-xs font-semibold">
                    See more
                </Button>
            </div>
        </article>
    );
}
