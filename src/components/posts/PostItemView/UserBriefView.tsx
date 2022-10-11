import {useGetUserQuery} from 'store/actions/users';
import {User} from 'types';
import maleAvatar from 'assets/images/male-avatar.svg';

type UserBriefViewProps = {
    userId: User['id'];
    extendedView?: boolean;
};

export function UserBriefView({userId, extendedView = false}: UserBriefViewProps) {
    const {data, isLoading} = useGetUserQuery(userId);

    if (!data || isLoading) {
        return <></>;
    }

    if (extendedView) {
        return (
            <>
                <div className="bg-gray-100 rounded-md p-4 flex justify-between items-center">
                    <div>
                        <h3 className="text-sm font-bold pb-2">
                            {data.name} | {data.username}
                        </h3>
                        <p className="text-xs text-gray-500 font-normal">{data.email}</p>
                        <p className="text-xs text-gray-500 font-normal">{data.phone}</p>
                        <p className="text-xs text-gray-500 font-normal">{data.website}</p>
                    </div>
                    <div>
                        <img className="w-16" src={maleAvatar} alt={data.name} />
                    </div>
                </div>

                <div className="bg-gray-100 rounded-md mt-2 p-4">
                    <h3 className="text-sm font-bold pb-2">Company data</h3>
                    <p className="text-xs text-gray-500 font-normal">{data.company.name}</p>
                    <p className="text-xs text-gray-500 font-normal">{data.company.bs}</p>
                    <p className="text-xs text-gray-500 font-normal">
                        {data.company.catchPhrase}
                    </p>
                </div>
            </>
        );
    }

    return (
        <>
            <img className="w-10 mr-2" src={maleAvatar} alt={data.name} />
            <h3 className="text-xs font-semibold">
                <span className="text-gray-600 font-normal">by</span> {data.name}
            </h3>
        </>
    );
}
