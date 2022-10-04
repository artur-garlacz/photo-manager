import {useGetUserQuery} from 'store/actions/users';
import {FaUserCircle} from 'react-icons/fa';
import {User} from 'types';

type UserBriefViewProps = {
    userId: User['id'];
};

export function UserBriefView({userId}: UserBriefViewProps) {
    const {data, isLoading} = useGetUserQuery(userId);

    if (!data || isLoading) {
        return <></>;
    }

    return (
        <>
            <FaUserCircle className="w-7 h-7 mr-2" />
            <h3 className="text-xs font-semibold">
                <span className="text-gray-600 font-normal">by</span> {data.name}
            </h3>
        </>
    );
}
