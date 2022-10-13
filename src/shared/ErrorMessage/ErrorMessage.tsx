import React from 'react';
import {useBem} from 'light-react-ui-lib';

import './ErrorMessage.scss';

interface IErrorMessage {
    text?: string,
}

export default function ErrorMessage(props: IErrorMessage) {
    const bem = useBem('ErrorMessage');

    return (
       <p className={bem.block()}>
           {props.text || 'Произошла ошибка, попробуйте позже'}
       </p>
    );
}
