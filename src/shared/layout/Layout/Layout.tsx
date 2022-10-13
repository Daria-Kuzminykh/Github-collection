import React from 'react';
import {useBem} from 'light-react-ui-lib';
import Header from '../Header';

import './Layout.scss';

interface ILayout {
    children: React.ReactNode
}

export default function Layout(props: ILayout) {
    const bem = useBem('Layout');

    return (
       <div className={bem.block()}>
           <Header />
           {props.children}
       </div>
    );
}
