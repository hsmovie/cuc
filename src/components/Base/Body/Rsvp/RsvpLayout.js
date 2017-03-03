import React from 'react';
export { default as RsvpForm } from './RsvpForm';
export { default as Rsvp } from './Rsvp';
export { default as RsvpTime } from './RsvpTime';
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