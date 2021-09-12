import * as React from 'react';

import { Footer } from './Footer';
import { Helmet } from 'react-helmet';
import { Navigation } from './navigation';

export const Layout = ({ children, title }: { children: React.ReactElement; title: string }): React.ReactElement => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Navigation />
            <main>{children}</main>
            <Footer />
        </>
    );
};
