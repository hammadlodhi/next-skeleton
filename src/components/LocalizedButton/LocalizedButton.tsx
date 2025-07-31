import classNames from 'classnames';
import React, {FC, ButtonHTMLAttributes, ReactNode} from 'react';
import { LocalizedText } from '../LocalizedText/LocalizedText';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>, LocalizedProps {
    variant?: 'hollow' | 'filled' | 'danger';
    size?: 'small' | 'medium' | 'large';
    icon?: ReactNode;
}
export const LocalizedButton: FC<IButton> = ({
    className,
    variant = 'filled',
    size = 'medium',
    type = 'button',
    icon,
    ...props
}) => {
    return (
        <button
            className={classNames(
                className,
                'localized-button',
                `localized-button--${variant}`,
                `localized-button--${size}`,
                {'localized-button--icon': !!icon},
            )}
            type={type}
            {...props}>
            {icon}
            <LocalizedText {...props} />
        </button>
    );
};
