import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

export type NavigationItem = {
    className: string;
    openInNewTab: boolean;
    title: string | React.ReactElement;
    url: string;
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
    {
        className: 'nav-logo',
        title: <StaticImage src="../images/ircb.png" alt="I Read Comic books" height={100} />,
        url: 'https://www.ircbpodcast.com/',
        openInNewTab: true,
    },
    {
        className: 'home',
        title: 'Home',
        url: 'https://pages.ircbpodcast.com/',
        openInNewTab: false,
    },
    {
        className: 'cb-guide',
        title: 'Comic Book Industry Name Pronunciation Guide',
        url: '/pronunciation-guide',
        openInNewTab: false,
    },
    {
        className: 'nft-list',
        title: 'NFT Shit List',
        url: '/nft-shit-list',
        openInNewTab: false,
    },
];
