import {LinkProps} from 'next/link';
import {AnchorHTMLAttributes} from 'react';

declare global {
    type Link = AnchorHTMLAttributes<HTMLAnchorElement> & LocalizedProps & Omit<LinkProps, 'href'>;
}
