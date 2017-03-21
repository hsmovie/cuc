import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system';
import _ from 'lodash';
import Rsvp from './Rsvp';
import {connect} from 'react-redux';
import * as rsvp from 'redux/modules/base/rsvp';
import * as rsvpdb from 'helpers/firebase/database/rsvp';
class RsvpOne extends Component {
    
    componentWillMount() {
        this.props.getFirstRsvps();
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
    console.log(this.props.loginModal);
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
            <Container className="rsvp-wrapper">
                <Row>
                    <Col sm={2} xs={2} className="rsvp-month">{realMonth}</Col>
                    <Col sm={2} xs={2}>
                        <div className="rsvp-date">
                            {monthAndDay.date}
                        </div>
                        <div className="rsvp-day">
                            {monthAndDay.day}
                        </div>
                    </Col>
                    <Col sm={8}  xs={8} className="rsvp-content">
                          {renderRsvps()}
                    </Col>
                </Row>
                
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
  return { 
      rsvp: state.base.rsvp.rsvp
 };
}
export default connect(mapStateToProps, rsvp)(RsvpOne);