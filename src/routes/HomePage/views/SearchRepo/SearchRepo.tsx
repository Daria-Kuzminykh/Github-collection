import React from 'react';
import {useBem} from 'hooks/useBem';

import './SearchRepo.scss';

interface ISearchRepo {
}

export default function SearchRepo(props: ISearchRepo) {
    const bem = useBem('SearchRepo');

    return (
       <div className={bem.block()}>
       </div>
    );
}
