import React from 'react';
import _ from 'lodash';
import { Button } from 'semantic-ui-react';
const Rsvp = ({rsvp, handleDelete, handleCheck, index }) => {
    console.log(index);
    return (
        <div className="rsvp">
            <Button circular size='big' icon='checkmark' id={index}/>
            <span className="time">{rsvp.time}</span>
            <span className="people">{rsvp.people}</span>
            <Button  className="dltButton" onClick={handleDelete}>DELETE</Button>
        </div>
    );
};

export default Rsvp;