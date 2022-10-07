import type {ReactNode} from 'react';
import {Header} from './header/Header';

type LayoutProps = {
    readonly children: ReactNode;
};

export const Layout = ({children}: LayoutProps) => (
    <>
        <Header />
        <main className="h-93vh w-full max-w-7xl mx-auto sm:px-6 bg-white px-4 flex flex-col items-center justify-center">
            {children}
        </main>
    </>
);
