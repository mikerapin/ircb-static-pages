import * as React from 'react';

import { Helmet } from 'react-helmet';

export const Header = ({ title }: { title: string }): React.ReactElement => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};
