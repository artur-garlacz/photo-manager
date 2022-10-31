import Button from 'components/ui/Button';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from 'store';
import {logout} from 'store/reducers';

export function Header() {
    const {user, isAuthenticated} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <header className="sticky top-0 z-40 h-53px bg-white border-b-1 border-gray-200">
            <div className="max-w-7xl h-full mx-auto px-4 sm:px-6">
                <nav className="flex justify-between items-center py-2 md:space-x-10">
                    <h1 className="font-semibold text-3xl text-left">
                        <Link to="/">AG</Link>
                    </h1>
                    <ul className="inline-flex gap-5">
                        <li>
                            <Link className="text-sm font-bold" to="posts">
                                Posts
                            </Link>
                        </li>
                        <li>
                            <Link className="text-sm font-bold" to="/">
                                Feed
                            </Link>
                        </li>
                    </ul>

                    {!!user && isAuthenticated ? (
                        <div className="flex items-center gap-x-2">
                            <Link className="text-sm font-bold" to={`/users/${user.id}`}>
                                My account
                            </Link>
                            <Button onClick={handleLogout}>Logout</Button>
                        </div>
                    ) : (
                        <Link className="text-sm font-bold" to="login">
                            Login
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
}
