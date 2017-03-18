import _ from 'lodash';
import { Button, Image } from 'semantic-ui-react';
import React, { Component } from 'react';

import firebase from 'firebase';
import * as rsvpdb from 'helpers/firebase/database/rsvp';

class Rsvp extends Component {
    
    state = {
        buttonToggle: false
    }

    componentWillMount(){
        
        const d = new Date();
        const todayMonth = d.getMonth()+1;
        // const todayDate = d.getDate();
        const uid = firebase.auth().currentUser;
        firebase.database().ref('rsvp').child(todayMonth).child(18).child(this.props.index).child('people')
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
        rsvpdb.addPhotoAndPeople(uid, this.props.index);
        this.setState({
            buttonToggle:true
        });
    }
    handleUnCheck = (user, id) => {
        const uid = firebase.auth().currentUser;
        rsvpdb.deletePhotoAndPoeple(uid, this.props.index);
        this.setState({
            buttonToggle:false
        });
    }

    renderPhotos = () => {
        return _.map(this.props.rsvp.people, (people, index) => {
        
      return (
           <Image key={index} floated="right" size="mini" shape="circular" src={people.photo}/>
          
      );
    });
    }
// <Image floated="right" size="mini" shape="circular" src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"/>
    render() {
        
        const {handleUnCheck, handleCheck, renderPhotos} = this;
        return (
         <div className="rsvp" id={this.props.index}>
            <Button 
                circular size='big' 
                icon='checkmark' 
                active={this.state.buttonToggle} 
                onClick={this.state.buttonToggle ? (user, id) => handleUnCheck(user, id) : (user, id) =>handleCheck(user, id) }
            />
            <span className="time">{this.props.rsvp.time}</span>
            <span className="people">{this.props.rsvp.number}</span>
            <span>
                {renderPhotos()}
                
            </span>
            
            <Button  className="dltButton" onClick={this.props.handleDelete}>DELETE</Button>
        </div>
        );
    }
}

export default Rsvp;

// import React from 'react';

// const Rsvp = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Rsvp;