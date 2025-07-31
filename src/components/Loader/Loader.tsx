import React from 'react';
import {Backdrop} from '../Backdrop/Backdrop';
import {Puff} from 'react-loader-spinner';

export const Loader: React.FC = () => {
    return (
        <Backdrop active={true}>
            <div className="loader">
                <Puff height={60} width={60} />
            </div>
        </Backdrop>
    );
};
