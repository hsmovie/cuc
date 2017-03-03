import React from 'react';
import BigLogo from './BigLogo';
import { wine1 } from 'styles/images';
const Introduction = () => {

    

    return (
        <div className="introduction-wrapper">
            <div className="introduction">
                <BigLogo/>
                <div className="introduction-description">
                    <p>Don't just exist</p>
                    <p>See you soon at CUC</p>
                    {wine1}
                </div>
            </div>
        </div>
    );
};

export default Introduction;
