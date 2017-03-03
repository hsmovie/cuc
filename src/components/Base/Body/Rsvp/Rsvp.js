import React from 'react';
import _ from 'lodash';
import { Button, Icon } from 'semantic-ui-react'
const Rsvp = ({rsvp, handleDelete }) => {

    return (
        <div className="rsvp">
            <span>{Date.now()}</span>
            <span className="title">{rsvp.title}</span>
            <span className="time">{rsvp.time}</span>
            <Button animated circular>
                <Button.Content visible>Go?</Button.Content>
                <Button.Content hidden>
                     <Icon name='right arrow' />
                </Button.Content>
            </Button>
            <Button  onClick={handleDelete}>DELETE</Button>
            <hr/>
        </div>
    );
};

export default Rsvp;