import React from 'react';

export { default as Rsvp } from './Rsvp';
export { default as RsvpOne } from './RsvpOne';
export { default as RsvpTwo } from './RsvpTwo';
export { default as RsvpThree } from './RsvpThree';
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