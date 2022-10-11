import type {ReactNode} from 'react';
import {Header} from './header/Header';

type LayoutProps = {
    readonly children: ReactNode;
};

export function Layout({children}: LayoutProps) {
    return (
        <>
            <Header />
            <main className="w-full max-w-7xl mx-auto sm:px-6 bg-white px-4 flex flex-col items-center justify-center">
                {children}
            </main>
        </>
    );
}

type SidebarProps = {readonly children: ReactNode | ReactNode[]};

export function Sidebar({children}: SidebarProps) {
    return (
        <aside className="none md:flex md:flex-200px lg:flex-300px">
            <div>
                <div
                    style={{paddingRight: 1000, marginRight: 1000}}
                    className="fixed h-full border-l-1"
                >
                    <div className="md:w-200px lg:w-300px py-12 pl-4">{children}</div>
                </div>
            </div>
        </aside>
    );
}
