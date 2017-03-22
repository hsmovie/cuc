import React, { Component } from 'react';

import _ from 'lodash';
import Rsvp from './Rsvp';
import {connect} from 'react-redux';
import * as rsvp from 'redux/modules/base/rsvp';

class RsvpSix extends Component {
    componentWillMount() {
        this.props.getSixthRsvps();
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
            modal={this.props.loginModal}
            month={this.props.dateData.month}
          />
      );
    });
    }

    render() {
        const {renderRsvps} = this;
    
        return (
           <div className="rsvp-wrapper row">
                    <span className="rsvp-month">{this.props.dateData.render_month}</span>
                    <span className="rsvp-dateAndDay-wrapper">
                        <div className="rsvp-date">
                            {this.props.dateData.date}
                        </div>
                        <div className="rsvp-day">
                            {this.props.dateData.day}
                        </div>
                    </span>
                    <span className="rsvp-content">
                          {renderRsvps()}
                    </span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return { 
      rsvp: state.base.rsvp.rsvpSix
 };
}
export default connect(mapStateToProps, rsvp)(RsvpSix);