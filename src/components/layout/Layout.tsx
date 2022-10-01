import type { ReactNode } from "react";
import { Header } from "./header/Header";

type LayoutProps = {
  readonly children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className="h-full w-full max-w-7xl mx-auto sm:px-6 bg-white py-8 px-4 flex flex-col items-center justify-center">
      {/* <h1 className="font-semibold text-5xl text-left w-full">AG</h1> */}
      {children}
    </main>
  </>
);
