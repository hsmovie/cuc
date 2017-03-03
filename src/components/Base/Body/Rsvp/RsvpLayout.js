import React from 'react';
export { default as RsvpForm } from './RsvpForm';
export { default as Rsvp } from './Rsvp';
const RsvpLayout = ({children}) => {
    return (
        <div className="rsvplayout-wrapper">
            <div className="rsvplayout">
                 {children}
            </div>
        </div>
    );
};

export default RsvpLayout;