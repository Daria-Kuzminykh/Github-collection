import React from 'react';
import {MAIN_ROUTES} from '../../../consts/routes';
import {useBem} from 'hooks/useBem';
import Nav from '../../Nav';

import './Header.scss';
import Section from '../Section';

// interface IHeader {
// }

export default function Header() {
    const bem = useBem('Header');

    return (
       <header className={bem.block()}>
           <Section className={bem.element('container')}>
                <h1 className={bem.element('logo')}>
                    GitHub Collection
                </h1>
                <Nav
                    items={MAIN_ROUTES}
                    className={bem.element('nav')}
                />
           </Section>
       </header>
    );
}
