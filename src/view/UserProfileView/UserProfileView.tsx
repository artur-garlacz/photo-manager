import {InfoLabel} from 'components/ui/InfoLabel';
import Button from 'components/ui/Button';
import {EditUserDataModal} from 'components/modal/EditUserDataModal';
import {useEffect, useState} from 'react';
import {useAppSelector} from 'store';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';

export function UserProfileView() {
    const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();
    const {isAuthenticated, user} = useAppSelector(state => state.auth);

    const {t} = useTranslation(['common', 'user']);

    useEffect(() => {
        if (!isAuthenticated) navigate('/');
    }, [isAuthenticated, navigate]);

    return (
        <>
            <section className="flex flex-col justify-center gap-3 p-4 max-w-5xl mx-auto h-[calc(100vh_-_53px)]">
                <nav className="flex justify-between">
                    <h2 className="text-xl font-bold">{t('user:profile')}</h2>
                    {isAuthenticated && (
                        <Button variant="primary" onClick={() => setOpen(true)}>
                            {t('common:edit')}
                        </Button>
                    )}
                </nav>

                <div className="grid grid-cols-2 gap-4">
                    <InfoLabel label="Nazwa">{user?.name}</InfoLabel>
                    <InfoLabel label="Nazwa użytkownika">{user?.username}</InfoLabel>
                    <InfoLabel label="Adres email">{user?.email}</InfoLabel>
                    <InfoLabel label="Numer telefonu">{user?.phone}</InfoLabel>
                    <InfoLabel label="Strona">{user?.website}</InfoLabel>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <InfoLabel label="Miasto">{user?.address.city}</InfoLabel>
                    <InfoLabel label="Ulica">{user?.address.street}</InfoLabel>

                    <InfoLabel label="Kod pocztowy">{user?.address.zipcode}</InfoLabel>

                    <InfoLabel label="Geo lokalizacja">
                        {user?.address.geo.lat} {user?.address.geo.lng}
                    </InfoLabel>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <InfoLabel label="Nazwa firmy">{user?.company.name}</InfoLabel>

                    <InfoLabel label="BS">{user?.company.bs}</InfoLabel>

                    <InfoLabel label="Tagi">{user?.company.catchPhrase}</InfoLabel>
                </div>
            </section>
            {user && (
                <EditUserDataModal isOpen={isOpen} user={user} onClose={() => setOpen(false)} />
            )}
        </>
    );
}
