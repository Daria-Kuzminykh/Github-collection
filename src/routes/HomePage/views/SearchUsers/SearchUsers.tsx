import React, {useState} from 'react';
import {useBem} from 'light-react-ui-lib';
import InputSearch from 'shared/InputSearch';
import {useSearchUsersQuery} from 'store/github/github.api';
import ErrorMessage from 'shared/ErrorMessage';
import {IUser} from 'types/IUser';
import {useDebounce} from 'hooks/useDebounce';
import {MIN_SEARCH_LENGTH} from 'consts/search';
import List from 'shared/List';

import './SearchUsers.scss';

const USER_PRIMARY_KEY = 'login';

export default function SearchUsers() {
    const bem = useBem('SearchUsers');
    const [searchValue, setSearchValue] = useState('');

    const debounced = useDebounce(searchValue);
    const {isLoading, isError, data} = useSearchUsersQuery(debounced, {
        skip: debounced.length < MIN_SEARCH_LENGTH,
    });

    const users = data as IUser[];

    return (
       <div className={bem.block()}>
           <InputSearch
                label='Поиск пользователей'
                value={searchValue}
                onChange={setSearchValue}
           />
           <div className={bem.element('dropdown')}>
                {isError
                    ? <ErrorMessage />
                    : (
                        <List
                            items={users}
                            isLoading={isLoading}
                            primaryKey={USER_PRIMARY_KEY}
                        />
                    )}
           </div>
       </div>
    );
}
