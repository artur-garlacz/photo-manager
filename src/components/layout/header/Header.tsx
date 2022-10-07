import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <header className="sticky  top-0 z-40 bg-white border-b-1 border-gray-200">
            <div className="max-w-7xl h-full mx-auto px-4 sm:px-6">
                <nav className="flex justify-between items-center py-2 md:space-x-10">
                    <h1 className="font-semibold text-3xl text-left">AG</h1>
                    <ul className="inline-flex gap-5">
                        <li>
                            <Link className="text-sm font-bold" to="posts">
                                Posts
                            </Link>
                        </li>
                        <li>
                            <Link className="text-sm font-bold" to="albums">
                                Photos
                            </Link>
                        </li>
                    </ul>
                    <Link className="text-sm font-bold" to="profile">
                        My account
                    </Link>
                </nav>
            </div>
        </header>
    );
};
