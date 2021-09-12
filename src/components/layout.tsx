import * as React from 'react';

import { Footer } from './Footer';
import { Navigation } from './navigation';

export const Layout = ({ children }: { children: React.ReactElement }): React.ReactElement => {
    return (
        <>
            <Navigation />
            <main>{children}</main>
            <Footer />
        </>
    );
};
