import '../scss/layout.scss';

import * as React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
import { Layout } from './layout';
import { MDXProvider } from '@mdx-js/react';
import { NameGuideTable } from './name-guide-table';
import { ShitListTable } from './shit-list-table';

const shortcodes = { NameGuideTable, ShitListTable, Helmet };

// eslint-disable-next-line react/display-name
export default ({ children }: { children: React.ReactElement }): React.ReactElement => {
    return (
        <MDXProvider components={shortcodes}>
            <Layout title={'cool'}>{children}</Layout>
        </MDXProvider>
    );
};
