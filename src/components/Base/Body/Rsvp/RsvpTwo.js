import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system';
import _ from 'lodash';
import Rsvp from './Rsvp';
import {connect} from 'react-redux';
import * as rsvp from 'redux/modules/base/rsvp';

class RsvpTwo extends Component {
    componentWillMount() {
        this.props.getSecondRsvps();
    }

    handleDelete = (key) => {
        const d = new Date();
        const todayMonth = d.getMonth()+1;
        const todayDate = d.getDate();
       this.props.deleteRsvp(key, todayMonth + 1, todayDate + 1);
    }

    renderRsvps = () => {
    const {handleDelete} = this;
    // const d = new Date();
    // const todayDate = d.getDate();
    // const todayMonth = d.getMonth()+1;
    
    return _.map(this.props.rsvp, (rsvp, index) => {
      return (
          
          <Rsvp 
            key={index}
            handleDelete={() => handleDelete(index)}
            rsvp={rsvp} 
            index={index}
          />
      );
    });
    }

    render() {
        const {renderRsvps} = this;
        return (
            <Container className="rsvp-wrapper">
                <Row>
                    <Col sm={2} className="rsvp-month"></Col>
                    <Col sm={2}>
                        <div className="rsvp-date">
                            7
                        </div>
                        <div className="rsvp-day">
                            Tuesday
                        </div>
                    </Col>
                    <Col sm={8} className="rsvp-content">
                          {renderRsvps()}
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
  return { 
      rsvp: state.base.rsvp.rsvpTwo
 };
}
export default connect(mapStateToProps, rsvp)(RsvpTwo);