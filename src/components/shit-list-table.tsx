import * as React from 'react';

import { ShitListData } from '../data/nft-data';

export const ShitListTable = (): React.ReactElement => {
    const shitListSorted = ShitListData.shitlist.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    return (
        <table width="100%" role="grid">
            <thead>
                <tr role="row">
                    <th
                        data-column="0"
                        tabIndex={0}
                        scope="col"
                        role="columnheader"
                        aria-disabled="false"
                        unselectable="on"
                        aria-sort="ascending"
                        aria-label="Name: Ascending"
                        style={{ userSelect: 'none' }}>
                        Name
                    </th>
                    <th
                        data-column="1"
                        scope="col"
                        role="columnheader"
                        aria-disabled="true"
                        unselectable="on"
                        aria-sort="none"
                        aria-label="Source of the information"
                        style={{ userSelect: 'none' }}>
                        Source
                    </th>
                </tr>
            </thead>
            <tbody aria-live="polite" aria-relevant="all">
                {shitListSorted.map(shitlist => (
                    <tr key={shitlist.name} role="row">
                        <td>
                            {shitlist.new && <span className="new">NEW!</span>}
                            {shitlist.name}
                        </td>
                        <td>
                            <a href={shitlist.url} target="_blank" rel="noreferrer noopener">
                                {shitlist.source}
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
