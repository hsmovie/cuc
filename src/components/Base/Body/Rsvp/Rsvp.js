import React from 'react';
import _ from 'lodash';
import { Button, Icon } from 'semantic-ui-react'
const Rsvp = ({rsvp, handleDelete }) => {

    return (
        <div className="rsvp">
            <Button circular  size='big' icon='checkmark'/>

            <span className="title">{rsvp.title}</span>
            <span className="time">{rsvp.time}</span>
            <span className="people">{rsvp.people}</span>
            <Button  onClick={handleDelete}>DELETE</Button>
        </div>
    );
};

export default Rsvp;