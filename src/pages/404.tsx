import * as React from 'react';

import { Layout } from '../components/layout';

const ErrorPage = (): React.ReactElement => {
    return (
        <Layout title="404">
            <>Error, sorry bud</>
        </Layout>
    );
};

export default ErrorPage;
