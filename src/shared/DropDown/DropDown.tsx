import React from 'react';
import {useBem} from 'light-react-ui-lib';

import './DropDown.scss';

interface IDropDown {
}

export default function DropDown(props: IDropDown) {
    const bem = useBem('DropDown');

    return (
       <div className={bem.block()}>
       </div>
    );
}
