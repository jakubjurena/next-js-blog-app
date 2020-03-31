import React, { FunctionComponent, ReactNode } from "react";
import Link from "next/link";

export type PageLayoutProps = {
    children: ReactNode;
};

export const PageLayout: FunctionComponent<PageLayoutProps> = ({ children }) => (
    <div>
        <header>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </header>
        <div className="content">{children}</div>
    </div>
);
