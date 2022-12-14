import Button from 'components/ui/Button';
import {Comment} from 'types';

type CommentItemViewProps = {
    data?: Comment;
    onDelete?: () => void;
};

export function CommentItemView({data, onDelete}: CommentItemViewProps) {
    if (!data) {
        return <></>;
    }

    const {name, body, email} = data;

    return (
        <>
            <article className="flex flex-col items-start w-full my-4 px-4 p-5 border-b-gray-200 border-b-1">
                <h3 className="font-semibold text-left text-regular pb-2">{name}</h3>
                <p className="lg:w-4/5 text-xs text-gray-500">{body}</p>
                <div className="w-full flex justify-between mt-3">
                    <div className="flex items-center">
                        <p className="text-xs font-semibold">
                            <span className="text-gray-600 font-normal">by</span> {email}
                        </p>
                    </div>
                    <Button
                        onClick={onDelete}
                        variant="secondary"
                        className="text-xs font-semibold"
                    >
                        Delete comment
                    </Button>
                </div>
            </article>
        </>
    );
}
