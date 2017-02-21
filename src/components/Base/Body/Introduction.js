import React from 'react';
import BigLogo from './BigLogo';
import RsvpLayout from './Rsvp/RsvpLayout';
const Introduction = () => {
    return (
        <div className="introduction-wrapper">
            <div className="introduction">
                <BigLogo/>
                <div className="introduction-description">
                    <p>Don't just exist</p>
                    <p>See you soon at CUC</p>
                </div>
            </div>
           <RsvpLayout/>
        </div>
    );
};

export default Introduction;