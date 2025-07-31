import React, {FC, JSX} from 'react';
import {uuid} from 'uuidv4';
import classNames from 'classnames';
import { LocalizedLabel } from '../LocalizedLabel/LocalizedLabel';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement>, LocalizedProps {
    label: string;
    options?: Option[];
}

export const LocalizedCheckbox: FC<IProps> = React.forwardRef<HTMLInputElement, IProps>(
    ({label, components, className, ...props}, ref): JSX.Element => {
        const id = uuid();

        return (
            <div className={classNames(className, 'localized-checkbox')}>
                <input ref={ref} id={id} type="checkbox" {...props} />
                <LocalizedLabel htmlFor={id} label={label} components={components} />
            </div>
        );
    },
);
