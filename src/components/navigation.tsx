import '../scss/nav.scss';

import * as React from 'react';

import { NAVIGATION_ITEMS, NavigationItem } from '../data/navigation-data';

import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';

export const Navigation = (): React.ReactElement => {
    return (
        <nav>
            <Helmet>
                <meta charSet="utf-8" />
            </Helmet>
            <ul className="menu-list">
                {NAVIGATION_ITEMS.map((item: NavigationItem) => {
                    const linkAttr = {
                        href: item.url,
                        ...(item.openInNewTab ? { target: '_blank', rel: 'noreferrer' } : {}),
                    };
                    return (
                        <li key={item.className} className={`nav-item ${item.className}`}>
                            <a {...linkAttr}>{item.title}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
