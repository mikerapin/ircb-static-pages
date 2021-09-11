import * as React from 'react';

import { NameData } from '../data/name-data';

export const NameGuideTable = (): React.ReactElement => {
    const sortedNameData = NameData.names.sort((a, b) => {
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
                        aria-sort="none"
                        aria-label="Name"
                        style={{ userSelect: 'none' }}>
                        <div className="tablesorter-header-inner">
                            <b>Name</b>
                        </div>
                    </th>
                    <th
                        data-column="1"
                        scope="col"
                        role="columnheader"
                        aria-disabled="true"
                        unselectable="on"
                        aria-sort="none"
                        aria-label="Pronunciation"
                        style={{ userSelect: 'none' }}>
                        <div className="tablesorter-header-inner">
                            <b>Pronunciation</b>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody aria-live="polite" aria-relevant="all">
                {sortedNameData.map(item => (
                    <tr key={item.name} role="row">
                        <td>{item.name}</td>
                        <td>{item.pronounce}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
