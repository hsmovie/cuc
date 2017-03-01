import React from 'react';

const RsvpForm = ({handleTitle, handleBody, onSubmit, title, body}) => {
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                        <div>
                            <input
                                placeholder="Title"
                                value={title}
                                onChange={handleTitle}
                                />
                            <input
                                placeholder="Body"
                                value={body}
                                onChange={handleBody}
                                />
                            <button action="submit">Create Rsvp</button>
                        </div>
                    </form>
        </div>
    );
};

export default RsvpForm;