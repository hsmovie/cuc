import React from 'react';

const RsvpForm = ({handleTitle, handleDate, handleDay, handleTime,handleMonth,  onSubmit, data}) => {
    
    return (
        <div className="rsvpform-wrapper">
                        <div className="rsvpform">
                            <input
                                placeholder="Month"
                                value={data.month}
                                onChange={handleMonth}
                                />
                            <input
                                placeholder="Title"
                                value={data.title}
                                onChange={handleTitle}
                                />
                            <input
                                placeholder="Date"
                                value={data.body}
                                onChange={handleDate}
                                />
                            <input
                                placeholder="Day"
                                value={data.day}
                                onChange={handleDay}
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