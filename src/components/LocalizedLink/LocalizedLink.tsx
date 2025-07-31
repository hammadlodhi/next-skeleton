import React from 'react';
import NextLink from 'next/link';
import { regex } from '<@>/util/regex';
import { LocalizedText } from '../LocalizedText/LocalizedText';

export const LocalizedLink: React.FC<Link> = ({href, t, values, components, onClick, children, ...props}) => {
    const appRoute = href?.substring(0, 1) === '/';
    const internalUrl = href && href.substring(0, 1) === '/' ? href : null;
    const externalUrl = href && !appRoute && !regex.containsHttp.test(href) ? `https://${href}` : href;
    return (
        <NextLink href={internalUrl || externalUrl || '!#'} {...props}>
            <a
                {...props}
                onClick={(e) => {
                    if (!href || href.length === 0 || href === '!#') e.preventDefault();
                    onClick?.(e);
                }}>
                {children}
                {<LocalizedText text={t} values={values} components={components} />}
            </a>
        </NextLink>
    );
};
