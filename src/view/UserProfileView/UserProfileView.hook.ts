import {useMemo} from 'react';
import {useParams} from 'react-router-dom';
import {useAppSelector} from 'store';
import {useGetUserQuery} from 'store/actions';

export function useUserProfileView() {
    const {userId} = useParams<{userId: string}>();
    const id = parseInt(userId!);
    const {data: currUser} = useGetUserQuery(id);
    const loggedUser = useAppSelector(state => state.auth.user);

    const isLoggedUserProfile = useMemo(() => {
        if (!loggedUser || !currUser) return false;

        return loggedUser.id === currUser.id;
    }, [currUser, loggedUser]);

    return {
        user: currUser,
        isLoggedUserProfile
    };
}
