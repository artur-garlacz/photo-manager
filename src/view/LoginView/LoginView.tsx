import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import {useTranslation} from 'react-i18next';

export function LoginView() {
    const {t} = useTranslation('auth');

    return (
        <section className="h-[calc(100vh_-_53px)] flex items-center">
            <form className="flex flex-col mx-auto xl:w-1/3 md:w-1/2 w-full bg-gray-100 p-4 rounded-md">
                <h2 className="text-xl font-semibold py-4">{t('login')}</h2>
                <div className={'flex flex-col py-4 gap-y-4 w-full'}>
                    <Input id={'username'} name={'username'} label={t('username')} />

                    <Input id={'password'} name={'password'} label={t('password')} />
                </div>

                <Button className={'self-center w-full mt-4 max-w-88'} variant={'primary'}>
                    {t('login')}
                </Button>
            </form>
        </section>
    );
}
