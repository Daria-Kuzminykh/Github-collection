import React from 'react';
import {useBem} from 'hooks/useBem';

import './FavoritePage.scss';
import Section from 'shared/layout/Section';

export default function FavoritePage() {
    const bem = useBem('FavoritePage');

    return (
        <div className={bem.block()}>
            <Section>
                Favorite
            </Section>
        </div>
    );
}
