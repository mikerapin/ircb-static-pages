import * as React from 'react';

import { Helmet } from 'react-helmet';
import { Layout } from '../components/layout';

const ErrorPage = (): React.ReactElement => {
    return (
        <Layout>
            <>
                <Helmet>
                    <title>404</title>
                </Helmet>
                Error, sorry bud
            </>
        </Layout>
    );
};

export default ErrorPage;
