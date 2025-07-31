import React from 'react';
import { LocalizedText } from '../LocalizedText/LocalizedText';

interface Props extends LocalizedProps {
    htmlFor?: string;
    className?: string;
}

export const LocalizedLabel: React.FC<Props> = ({htmlFor, ...props}) => {
    return (
        <label htmlFor={htmlFor}>
            <LocalizedText {...props} />
        </label>
    );
};
