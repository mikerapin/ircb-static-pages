import * as React from 'react';

import { Helmet } from 'react-helmet';
import socialShareImage from '../static/ircb.png';

type HeaderProps = {
    title: string;
    description: string;
    keywords: string;
};

export const Header = ({ title, description, keywords }: HeaderProps): React.ReactElement => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    return (
        <Helmet>
            <html lang="en" amp />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="author" content="I Read Comic Books" />
            <link rel="canonical" href={url} />

            {/* <!-- Google / Search Engine Tags --> */}
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
            <meta itemProp="image" content={socialShareImage} />

            {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={socialShareImage} />

            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="I Read Comic Books is a comic book podcast" />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={socialShareImage}></meta>
        </Helmet>
    );
};
