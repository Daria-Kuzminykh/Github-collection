import React from 'react';
import {useBem} from 'light-react-ui-lib';

import './Loader.scss';

export default function Loader() {
    const bem = useBem('Loader');

    return (
       <div className={bem.block()}>
           <svg className={bem.element('icon')} viewBox="0 0 40 40">
                <circle
                    cx="20"
                    cy="20"
                    r="15"
                    fill='transparent'
                    stroke='#db8318'
                    strokeWidth={6}
                    strokeDasharray='50 15'
                />
           </svg>
       </div>
    );
}
