import _ from 'lodash';
import { Button, Image, Label } from 'semantic-ui-react';
import React, { Component } from 'react';

import firebase from 'firebase';
import * as rsvpdb from 'helpers/firebase/database/rsvp';

class Rsvp extends Component {
    
    state = {
        buttonToggle: false
    }

    componentWillMount(){
        
        const uid = firebase.auth().currentUser;
        firebase.database().ref('rsvp').child(this.props.month).child(this.props.date).child(this.props.index).child('people')
        .once('value', (snap) => {
            if(snap.val() !== null){
                snap.forEach( (childSnap) => {
                    if(childSnap.key === uid.uid){
                        this.setState({
                            buttonToggle:true
                        });
                    }
                })
            }
           
        });
    }
    
    handleCheck = (user, id) => {
        const uid = firebase.auth().currentUser;
        rsvpdb.addPhotoAndPeople(uid, this.props.index, this.props.month, this.props.date);
        this.setState({
            buttonToggle:true
        });
    }
    handleUnCheck = (user, id) => {
        const uid = firebase.auth().currentUser;
        rsvpdb.deletePhotoAndPoeple(uid, this.props.index, this.props.month, this.props.date);
        this.setState({
            buttonToggle:false
        });
    }

    renderPhotos = () => {
        return _.map(this.props.rsvp.people, (people, index) => {
        
      return (
           <Image key={index} className="pictures" size="mini" shape="circular" src={people.photo}/>
          
      );
    });
    }
// <Image floated="right" size="mini" shape="circular" src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"/>
    render() {
        
        const {handleUnCheck, handleCheck, renderPhotos} = this;
        const checkButton = {
            transition: "all .5s",
            backgroundColor: "#219945"
            
        }
        return (
         <div className="rsvp" id={this.props.index}>
            <Button 
                circular 
                size='big' 
                active={this.state.buttonToggle} 
                onClick={this.state.buttonToggle ? (user, id) => handleUnCheck(user, id) : (user, id) =>handleCheck(user, id) }
                icon="checkmark"
                style={this.state.buttonToggle ? checkButton : null}
                className="goButton"
                data-hover="Go?"
            />
           
            <span className="time">{this.props.rsvp.time}</span>
            
            <span className="pictures-wraaper">
                {renderPhotos()}
            </span>
            
            <Button  className="dltButton" onClick={this.props.handleDelete}>DELETE</Button>
            <span className="number">
                <Label circular size="big">+{this.props.rsvp.number}</Label>
            </span>
            
        </div>
        );
    }
}

export default Rsvp;

