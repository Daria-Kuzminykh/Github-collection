import React from 'react';
import {useBem} from 'hooks/useBem';
import Loader from 'shared/Loader';

import './List.scss';

type TListItem = Record<string, any>;

interface IDefaultItemView {
    item: TListItem,
    primaryKey?: string,
}

const DefaultItemView = (props: IDefaultItemView) => {
    return (
        <span>
            {props.primaryKey ? props.item[props.primaryKey] : null}
        </span>
    )
}

interface IList {
    items: TListItem[],
    isLoading?: boolean,
    itemView?: (props: any) => JSX.Element,
    itemViewProps?: Record<string, any>,
    primaryKey?: string,
}

export default function List(props: IList) {
    const bem = useBem('List');

    const ItemView = props.itemView || DefaultItemView;

    if (props.isLoading) {
        return <Loader />
    }

    return (
       <ul className={bem.block()}>
           {props.items?.map((item, index) => (
                <li
                    key={index}
                    className={bem.element('item')}
                >
                   <ItemView
                        item={item}
                        primaryKey={props.primaryKey}
                        {...props.itemViewProps}
                   />
                </li>
           ))}
       </ul>
    );
}
