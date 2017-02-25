import React, { Component } from 'react';
import Introduction from 'components/Base/Body/Introduction';
import Rsvp from 'components/Base/Body/Rsvp';
class MainRoute extends Component {

   
    render() { 
         
         return (
            <div>
                <Introduction/>
                <Rsvp/>
            </div>
        );
    }
}

export default MainRoute;