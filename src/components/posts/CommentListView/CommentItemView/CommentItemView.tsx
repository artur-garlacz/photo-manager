import {FaUserCircle} from 'react-icons/fa';
import {Comment} from 'types';

type CommentItemViewProps = {
    data?: Comment;
};

export function CommentItemView({data}: CommentItemViewProps) {
    if (!data) {
        return <></>;
    }

    const {name, body, email} = data;

    return (
        <>
            <article className="flex flex-col items-start w-full my-4 px-4 p-5 border-b-gray-200 border-b-1">
                <h2 className="font-semibold text-left text-lg pb-2">{name}</h2>
                <p className="lg:w-4/5 text-xs text-gray-500">{body}</p>
                <div className="w-full flex justify-between mt-3">
                    <div className="flex items-center">
                        <FaUserCircle />
                    </div>
                    {/* <Button variant="secondary" className="text-xs font-semibold">
                        See more
                    </Button> */}
                </div>
            </article>
        </>
    );
}
