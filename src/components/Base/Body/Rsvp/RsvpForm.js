import React from 'react';

const RsvpForm = ({handleTitle, handleTime, onSubmit, data}) => {
    
    return (
        <div className="rsvpform-wrapper">
                        <div className="rsvpform">
                            <input
                                placeholder="Title"
                                value={data.title}
                                onChange={handleTitle}
                                />
                            <input
                                placeholder="Time"
                                value={data.time}
                                onChange={handleTime}
                                />
                            <button onClick={onSubmit}>Create Rsvp</button>
                        </div>
        </div>
    );
};

export default RsvpForm;