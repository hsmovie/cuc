import React from 'react';
import {Row, Col} from 'react-grid-system';
const RsvpTime = () => {
    const d = new Date();
         
    const day = ['Sunday' ,'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct', 'Nov.', 'Dse.'];

    const todayMonth = d.getMonth();
    const todayDay = d.getDay();
    const realDay = day[todayDay];
    const realMonth = month[todayMonth];
    const realDate = d.getDate();

    
  
    return (
    
        <Row className="rsvptime-wrapper">
            <Col sm={6}>
                <div className="rsvp-month">{realMonth}</div>
            </Col>
            <Col sm={6} className="rsvp-date-day">
                <div className="dateAndday">
                <span className="rsvp-date">{realDate}</span>
                <span className="rsvp-day">{realDay}</span>
                </div>
                <div className="dateAndday">
                <span className="rsvp-date">6</span>
                <span className="rsvp-day">Sunday</span>
                </div>
                <div className="dateAndday">
                <span className="rsvp-date">6</span>
                <span className="rsvp-day">Sunday</span>
                </div>
                <div className="dateAndday">
                <span className="rsvp-date">7</span>
                <span className="rsvp-day">Monday</span>
                </div>
                <div className="dateAndday">
                <span className="rsvp-date">7</span>
                <span className="rsvp-day">Monday</span>
                </div>
                <div className="dateAndday">
                <span className="rsvp-date">7</span>
                <span className="rsvp-day">Monday</span>
                </div>
            </Col>
            
        </Row>
    );
};

export default RsvpTime;