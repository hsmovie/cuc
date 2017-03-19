
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as rsvp from 'redux/modules/base/rsvp';
import * as rsvpdb from 'helpers/firebase/database/rsvp';
import _ from 'lodash';

// import RsvpForm from 'components/Base/Body/RsvpForm';
// import Rsvp from 'components/Base/Body/Rsvp';
import Introduction from 'components/Base/Body/Introduction/Introduction';
import RsvpLayout, { RsvpOne, RsvpTwo, RsvpThree, RsvpFour, RsvpFive, RsvpSix, RsvpSeven, RsvpEight, RsvpNine, RsvpTen } from 'components/Base/Body/Rsvp/RsvpLayout';

// import * as rsvp from 'redux/modules/base/rsvp';
class MainRoute extends Component {
    
    render() {
        const d = new Date();
        const todayMonth = d.getMonth();
        
        // const monthAndDay = rsvpdb.getDate(todayMonth, todayDay, todayDate);
        const dateData = [];
        for(let i = 1 ; i < 10 ; i++){
            
            const todayDate = d.getDate()+i;
            const todayDay = d.getDay()+i;
             dateData[i] = rsvpdb.getDate(todayMonth, todayDay, todayDate);
             
        }
        return (

            <div> 
                <Introduction/>
                
                <RsvpLayout>
                <RsvpOne/>
                <RsvpTwo dateData={dateData[1]}/>
                <RsvpThree dateData={dateData[2]}/>
                <RsvpFour dateData={dateData[3]}/>
                <RsvpFive dateData={dateData[4]}/>
                <RsvpSix dateData={dateData[5]}/>
                <RsvpSeven dateData={dateData[6]}/>
                <RsvpEight dateData={dateData[7]}/>
                <RsvpNine dateData={dateData[8]}/>
                <RsvpTen dateData={dateData[9]}/>

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
