import React, { Component } from 'react';

import _ from 'lodash';
import Rsvp from './Rsvp';
import {connect} from 'react-redux';
import * as rsvp from 'redux/modules/base/rsvp';
import * as rsvpdb from 'helpers/firebase/database/rsvp';
import firebase from 'firebase';
class RsvpOne extends Component {
    
    componentWillMount() {
        this.props.getFirstRsvps();
        firebase
                .database()
                .ref('rsvp')
                .child(3)
                .child(21)
                .child("2017321N")
                .child('people')
                .once('value', snap => {
                    console.log(snap.val());
                });

         firebase
                .database()
                .ref('rsvp')
                .child(3)
                .child(21)
                .child("2017321N")
                .child('people')
                .orderByValue()
                .once('value', snap => {
                    console.log(snap.val());
                });
    }

    handleDelete = (key) => {
        const d = new Date();
        const todayMonth = d.getMonth()+1;
        const todayDate = d.getDate();
       this.props.deleteRsvp(key, todayMonth, todayDate);
    }

    renderRsvps = () => {
    const {handleDelete} = this;
    const d = new Date();
    const todayDate = d.getDate();
    const todayMonth = d.getMonth()+1;
  
    return _.map(this.props.rsvp, (rsvp, index) => {
      return (
          
          <Rsvp 
            key={index}
            handleDelete={() => handleDelete(index)}
            modal={this.props.loginModal}
            rsvp={rsvp} 
            index={index}
            date={todayDate}
            month={todayMonth}
          />
          
      );
    });
    }



    render() {
        const {renderRsvps} = this;
        const d = new Date();
        const todayMonth = d.getMonth();
        const todayDate = d.getDate();
        const todayDay = d.getDay();
        const monthAndDay = rsvpdb.getDate(todayMonth, todayDay, todayDate);
        const monthFilter = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec.", ".Jan."];
        const realMonth = monthFilter[todayMonth];
        return (
            <div className="rsvp-wrapper row">
                    <span className="rsvp-month col-2">{realMonth}</span>
                    <span className="col-2">
                        <div className="rsvp-date">
                            {monthAndDay.date}
                        </div>
                        <div className="rsvp-day">
                            {monthAndDay.day}
                        </div>
                    </span>
                    <span className="rsvp-content col-8">
                          {renderRsvps()}
                    </span>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
  return { 
      rsvp: state.base.rsvp.rsvp
 };
}
export default connect(mapStateToProps, rsvp)(RsvpOne);