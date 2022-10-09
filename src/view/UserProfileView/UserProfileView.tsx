import {useGetUserQuery} from 'store/actions/users';
import {ReactComponent as ProfileImage} from 'assets/images/profile.svg';
import {InfoLabel} from 'components/ui/InfoLabel';
import Button from 'components/ui/Button';
import {EditUserDataModal} from 'components/modal/EditUserDataModal';
import {useState} from 'react';

export function UserProfileView() {
    const [isOpen, setOpen] = useState(false);
    const {data} = useGetUserQuery(1);
    return (
        <>
            <div className="flex justify-center items-center w-full">
                <aside className="flex items-center bg-gray-200 p-4 w-full xl:w-1/2">
                    <ProfileImage className="w-full" />
                </aside>
                {/* <aside className="fixed h-full w-1/4 left-0 top-12 overflow-y-auto flex-1 border-r-1 border-b-gray-200">
                d
            </aside> */}
                <section className="flex flex-col gap-3 p-4 w-1/2">
                    <nav className="flex justify-between">
                        <h2 className="text-xl font-bold">Profile</h2>
                        <Button variant="primary" onClick={() => setOpen(true)}>
                            Edytuj
                        </Button>
                    </nav>
                    {/* <h3 className="text-lg font-medium leading-6 text-gray-900 border-b-gray-200 border-b-2 w-fit">
                        Podstawowe informacje{' '}
                    </h3> */}
                    <div className="flex flex-wrap">
                        <InfoLabel className="w-full xl:w-1/2" label="Nazwa">
                            {data?.name}
                        </InfoLabel>
                        <InfoLabel className="w-full xl:w-1/2" label="Nazwa użytkownika">
                            {data?.username}
                        </InfoLabel>
                    </div>
                    <div className="flex flex-wrap">
                        <InfoLabel className="w-full xl:w-1/2" label="Adres email">
                            {data?.email}
                        </InfoLabel>
                        <InfoLabel className="w-full xl:w-1/2" label="Numer telefonu">
                            {data?.phone}
                        </InfoLabel>
                    </div>
                    <div className="flex flex-wrap">
                        <InfoLabel className="w-full xl:w-1/2" label="Strona">
                            {data?.website}
                        </InfoLabel>
                    </div>

                    {/* <h3 className="text-lg font-medium leading-6 text-gray-900 border-b-gray-200 border-b-2 w-fit">
                        Adres
                    </h3> */}

                    <div className="flex flex-wrap">
                        <InfoLabel className="flex-1" label="Miasto">
                            {data?.address.city}
                        </InfoLabel>
                        <InfoLabel className="flex-1" label="Ulica">
                            {data?.address.street}
                        </InfoLabel>
                    </div>
                    <div className="flex flex-wrap">
                        <InfoLabel className="flex-1" label="Kod pocztowy">
                            {data?.address.zipcode}
                        </InfoLabel>

                        <InfoLabel className="flex-1" label="Geo lokalizacja">
                            {data?.address.geo.lat} {data?.address.geo.lng}
                        </InfoLabel>
                    </div>

                    {/* <h3 className="text-lg font-medium leading-6 text-gray-900 border-b-gray-200 border-b-2 w-fit">
                        Firma
                    </h3> */}

                    <div className="flex flex-wrap">
                        <InfoLabel className="flex-1" label="Nazwa">
                            {data?.company.name}
                        </InfoLabel>

                        <InfoLabel className="flex-1" label="BS">
                            {data?.company.bs}
                        </InfoLabel>
                    </div>

                    <div className="flex flex-wrap">
                        <InfoLabel className="flex-1" label="Tagi">
                            {data?.company.catchPhrase}
                        </InfoLabel>
                    </div>
                </section>
            </div>
            {data && (
                <EditUserDataModal isOpen={isOpen} user={data} onClose={() => setOpen(false)} />
            )}
        </>
    );
}
