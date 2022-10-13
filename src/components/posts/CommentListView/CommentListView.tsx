import {CreateCommentModal} from 'components/modal/CreateCommentModal';
import {DeleteCommentModal} from 'components/modal/DeleteCommentModal';
import Button from 'components/ui/Button';
import {useCallback, useState} from 'react';
import {useGetCommentsQuery} from 'store/actions/comments';
import {Comment} from 'types';
import {CommentItemView} from './CommentItemView';

type CommentListViewProps = {
    postId: Comment['id'];
};

export function CommentListView({postId}: CommentListViewProps) {
    const {data, isLoading} = useGetCommentsQuery({postId});
    const [isOpenCreateModal, setOpenCreateModal] = useState(false);
    const [selectedComment, setComment] = useState<Comment>();

    const handleSelect = useCallback((comment?: Comment) => {
        setComment(comment);
    }, []);

    const handleToggle = useCallback(() => {
        setOpenCreateModal(state => !state);
    }, []);

    if (!data || isLoading) {
        return <></>;
    }

    return (
        <>
            <div className="flex justify-between items-center border-b py-3">
                <h2 className="text-normal font-semibold">Comments ({data.length})</h2>
                <Button variant="secondary" outline onClick={handleToggle}>
                    Add comment
                </Button>
            </div>
            {data.map(comment => (
                <CommentItemView data={comment} onDelete={() => handleSelect(comment)} />
            ))}
            {isOpenCreateModal && (
                <CreateCommentModal
                    postId={postId}
                    isOpen={isOpenCreateModal}
                    onClose={handleToggle}
                />
            )}
            {!!selectedComment && (
                <DeleteCommentModal
                    comment={selectedComment}
                    isOpen={!!selectedComment}
                    onClose={() => handleSelect()}
                />
            )}
        </>
    );
}
