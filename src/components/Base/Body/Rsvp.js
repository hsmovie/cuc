import React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';
import Menu from './Menu';

const Rsvp = () => {

   

    const CardExampleGroups = () => (
        
    <div className="card-wrapper">
        <div className="card-content">
            <div className="card-header">
                <b>아침세션</b>
            </div>
            
            <div className="card-date">
                2017/02/24 Monday
            </div>
            
            <div className="card-footer">
                 <Button basic color="teal">Go!</Button>
                 <Label color="pink">
                     <Icon name="users"/> 23+
                 </Label>
            </div>
        </div>
    </div>
);

    return (
        <div className="rsvp-wrapper">
              <div className="rsvp-content">
                <div className="rsvp-header">
                    <Button className="monday">Monday</Button>
                    <Button className="tuesday">Tuesday</Button>
                    <Button className="wednesday">Wednesday</Button>
                    <Button className="thursday">Thursday</Button>
                    <Button className="friday">Friday</Button>
                    <Button className="saturday">Saturday</Button>
                    <Button className="sunday">Sunday</Button>
                </div>
                <div className="rsvp-body">
                    {CardExampleGroups()}
                </div>
             </div>
        </div>
    );
};

export default Rsvp;