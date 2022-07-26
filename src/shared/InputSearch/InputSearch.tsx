import React from 'react';
import {useBem} from 'hooks/useBem';

import './InputSearch.scss';

interface IInputSearch {
    value: string,
    onChange: (value: string) => void,
    label?: string,
    placeholder?: string,
}

export default function InputSearch(props: IInputSearch) {
    const bem = useBem('InputSearch');
    const {label, value, onChange, placeholder} = props;

    return (
       <div className={bem.block()}>
           <label>
               <span className={bem.element('label', {label})}>
                    {!!label && label}
               </span>
                <input
                    className={bem.element('input')}
                    type="text"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    placeholder={placeholder || 'Введите строку для поиска...'}
                />
           </label>
       </div>
    );
}
