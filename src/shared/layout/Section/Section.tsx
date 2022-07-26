import React from 'react';
import {useBem} from 'light-react-ui-lib';

import './Section.scss';

interface ISection {
    children: React.ReactNode,
    className?: string,
}

export default function Section(props: ISection) {
    const bem = useBem('Section');

    return (
       <div className={bem.classNames([bem.block(), props.className])}>
           {props.children}
       </div>
    );
}
