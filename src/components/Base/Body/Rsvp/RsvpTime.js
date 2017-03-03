import React from 'react';

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
        <div className="rsvptime-wrapper">
            <div className="rsvp-month">{realMonth}</div>
            
                <span className="rsvp-date">{realDate}</span>
                <span className="rsvp-day">{realDay}</span>
            
        </div>
    );
};

export default RsvpTime;