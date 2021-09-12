import '../scss/footer.scss';

import * as React from 'react';

import { FOOTER_DATA, FooterDataItem } from '../data/footer-data';

export const Footer = (): React.ReactElement => {
    return (
        <footer>
            <ul className="footer-content">
                {FOOTER_DATA.map((item: FooterDataItem) => {
                    return (
                        <li key={item.className} className={item.className}>
                            <a href={item.url} target="_blank" rel="noreferrer">
                                {item.text}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </footer>
    );
};
