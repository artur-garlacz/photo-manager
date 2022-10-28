import {Link} from 'react-router-dom';
import {useAppSelector} from 'store';

export function Header() {
    const {user, isAuthenticated} = useAppSelector(state => state.auth);

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
                        <Link className="text-sm font-bold" to={`/users/${user.id}`}>
                            My account
                        </Link>
                    ) : (
                        <span />
                    )}
                </nav>
            </div>
        </header>
    );
}
