import '../scss/layout.scss';

import * as React from 'react';

import { Header } from './header';
import { Layout } from './layout';
import { MDXProvider } from '@mdx-js/react';
import { NameGuideTable } from './name-guide-table';
import { ShitListTable } from './shit-list-table';

const shortcodes = { NameGuideTable, ShitListTable, Header };

// eslint-disable-next-line react/display-name
const MdxLayout = ({ data, children }: { children: React.ReactElement; data: any }): React.ReactElement => {
    console.log(data);
    return (
        <MDXProvider components={shortcodes}>
            <Layout>{children}</Layout>
        </MDXProvider>
    );
};

export default MdxLayout;
