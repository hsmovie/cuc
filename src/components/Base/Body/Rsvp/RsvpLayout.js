import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
export { default as Rsvp } from './Rsvp';
export { default as RsvpOne } from './RsvpOne';
export { default as RsvpTwo } from './RsvpTwo';
export { default as RsvpThree } from './RsvpThree';
export { default as RsvpFour } from './RsvpFour';
export { default as RsvpFive } from './RsvpFive';
export { default as RsvpSix } from './RsvpSix';
export { default as RsvpSeven } from './RsvpSeven';
export { default as RsvpEight } from './RsvpEight';
export { default as RsvpNine } from './RsvpNine';
export { default as RsvpTen } from './RsvpTen';
const RsvpLayout = ({children}) => {
    return (
        <ScrollableAnchor id={'RSVP'}>
        <div className="rsvplayout-wrapper" >
            <div className="rsvplayout">
                <div className="rsvp-header">
                    RSVP 모임참가신청
                </div>
                 {children}
            </div>
        </div>
        </ScrollableAnchor>
    );
};

export default RsvpLayout;