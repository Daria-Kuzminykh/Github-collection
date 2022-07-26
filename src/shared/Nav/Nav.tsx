import React from 'react';
import {Link} from 'react-router-dom';
import {useBem} from 'hooks/useBem';

import './Nav.scss';

interface INavItems {
    toRoute: string,
    label: string,
}

interface INav {
    items: INavItems[],
    layout?: 'line' | 'column',
    className?: string,
}

export default function Nav(props: INav) {
    const bem = useBem('Nav');

    return (
       <nav className={bem.classNames([bem.block(props.layout), props.className])}>
           {props.items.map((item, index) => (
               <Link
                    key={index}
                    to={item.toRoute}
                    className={bem.element('link')}
               >
                   {item.label}
               </Link>
           ))}
       </nav>
    );
}
