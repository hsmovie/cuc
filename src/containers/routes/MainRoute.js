
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as rsvp from 'redux/modules/base/rsvp';

import _ from 'lodash';

// import RsvpForm from 'components/Base/Body/RsvpForm';
// import Rsvp from 'components/Base/Body/Rsvp';
import Introduction from 'components/Base/Body/Introduction/Introduction';
import RsvpLayout, { RsvpOne, RsvpTwo, RsvpThree } from 'components/Base/Body/Rsvp/RsvpLayout';

// import * as rsvp from 'redux/modules/base/rsvp';
class MainRoute extends Component {
    
//    componentWillMount() {
//       this.props.getFirstRsvps();
//    }

   

//     handleDelete = (key) => {
//        this.props.deleteRsvp(key);
//     }

//     handleCheck = (user, id) => {
//         console.log(user);
//         this.props.addPhotoAndPeople(user, id);
//     }

//     handleUnCheck = (user, id) => {
//         this.props.deletePhotoAndPoeple(user, id);
        
//     }

    

    render() {
    
        return (

            <div> 
                <Introduction/>
                
                <RsvpLayout>
                <RsvpOne/>
                <RsvpTwo/>
                <RsvpThree/>
                </RsvpLayout>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
  return { 
      rsvp: state.base.rsvp.rsvp
 };
}
export default connect(mapStateToProps, rsvp)(MainRoute);
