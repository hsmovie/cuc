import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system';
import _ from 'lodash';
import Rsvp from './Rsvp';
import {connect} from 'react-redux';
import * as rsvp from 'redux/modules/base/rsvp';

class RsvpNine extends Component {
    componentWillMount() {
        this.props.getNinthRsvps();
    }

    handleDelete = (key) => {
       this.props.deleteRsvp(key, this.props.dateData.month, this.props.dateData.month);
    }

    renderRsvps = () => {
    const {handleDelete} = this;
    
    
    return _.map(this.props.rsvp, (rsvp, index) => {
      return (
          
          <Rsvp 
            key={index}
            handleDelete={() => handleDelete(index)}
            rsvp={rsvp} 
            index={index}
            date={this.props.dateData.date}
            month={this.props.dateData.month}
          />
      );
    });
    }

    render() {
        const {renderRsvps} = this;
    
        return (
            <Container className="rsvp-wrapper">
                <Row>
                    <Col sm={2} className="rsvp-month">{this.props.dateData.render_month}</Col>
                    <Col sm={2}>
                        <div className="rsvp-date">
                            {this.props.dateData.date}
                        </div>
                        <div className="rsvp-day">
                            {this.props.dateData.day}
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
      rsvp: state.base.rsvp.rsvpNine
 };
}
export default connect(mapStateToProps, rsvp)(RsvpNine);