import React from 'react';
import {useBem} from 'hooks/useBem';

import './HomePage.scss';
import Section from 'shared/layout/Section';

export default function HomePage() {
    const bem = useBem('HomePage');

    return (
        <div className={bem.block()}>
            <Section>
                Home
            </Section>
        </div>
    );
}
