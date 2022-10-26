import {useLoginUserQuery} from 'store/actions/users';
import {getEnv} from 'utils/env';

export function useLoginUser() {
    const userId = getEnv('REACT_APP_USER_ID', 1);
    useLoginUserQuery(userId);
}
