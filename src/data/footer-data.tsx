import * as React from 'react';

import ApplePodcastsSVG from '../images/apple-podcasts';
import GooglePodcastsSVG from '../images/google-podcasts';
import { StaticImage } from 'gatsby-plugin-image';

export type FooterDataItem = {
    className: string;
    url: string;
    text: string | React.ReactElement;
};

const LOGO_WIDTH = 150;

export const FOOTER_DATA: FooterDataItem[] = [
    {
        className: 'listen-link',
        url: 'https://wavve.link/ircb',
        text: 'Listen to I Read Comic Books',
    },
    {
        className: 'apple-podcasts',
        url: 'https://podcasts.apple.com/us/podcast/i-read-comic-books/id794176975?ls=1&mt=2',
        text: <ApplePodcastsSVG />,
    },
    {
        className: 'spotify',
        url: 'https://open.spotify.com/show/72B7VcOI3jEBmNXVYW4dBv?si=DGtTs21JTtWndCn_US07Ng&nd=1',
        text: <StaticImage src="../images/stitcher-logo.png" alt="Listen on Stitcher" width={LOGO_WIDTH} />,
    },
    {
        className: 'google-podcasts',
        url: 'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9VOTN6anVTTg',
        text: <GooglePodcastsSVG />,
    },
    {
        className: 'stitcher',
        url: 'https://www.stitcher.com/show/i-read-comic-books',
        text: <StaticImage src="../images/spotify.png" alt="Listen on Spotify" width={LOGO_WIDTH} />,
    },
];
