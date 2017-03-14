import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system';
import {connect} from 'react-redux';
import * as actions from 'redux/modules/base/rsvp';
import Rsvp from './Rsvp';
import _ from 'lodash';
import firebase from 'firebase';

var arr = [ {"id":"10", "class": "child-of-9"}, {"id":"11", "classd": "child-of-10"}];

for (var i = 0; i < arr.length; i++){
    var obj = arr[i];
    console.log(obj);
    for (var key in obj){
        var attrName = key;
        console.log(attrName);
        var attrValue = obj[key];
        console.log(attrValue);
    }
}


class RsvpOne extends Component {
    state = {
        
    };
    
    componentWillMount() {
        this.props.getFirstRsvps();
    }

    handleDelete = (key) => {
       this.props.deleteRsvp(key);
    }

    handleCheck = (user, id) => {
        console.log(user);
        this.props.addPhotoAndPeople(user, id);
    }

    renderRsvps = () => {
    const {handleDelete, handleCheck} = this;
    const user = firebase.auth().currentUser;


    
    return _.map(this.props.rsvp, (rsvp, id) => {
        console.log(id);
      return (
          
          <Rsvp 
            handleCheck={() => handleCheck(user, id)}
            handleDelete={() => handleDelete(id)}
            rsvp={rsvp}
            index={id}
            
          />
      );
    });
    }



    render() {
        const node = this.props.rsvp.night;
        const d = new Date();
        const todayDate = d.getDate();
        const {renderRsvps} = this;
        return (
            <Container className="rsvp-wrapper">
                <Row>
                    <Col sm={2} className="rsvp-month">Mar.</Col>
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

function mapStateToProps(state) {
    return state.base;
}
export default connect(mapStateToProps, actions)(RsvpOne); 