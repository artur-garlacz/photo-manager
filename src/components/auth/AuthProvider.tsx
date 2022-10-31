import {useLoginUserQuery} from 'store/actions';

type AuthVerificationProps = {
    userId: number;
};

export function AuthVerification({userId}: AuthVerificationProps) {
    useLoginUserQuery(userId);

    return <></>;
}
