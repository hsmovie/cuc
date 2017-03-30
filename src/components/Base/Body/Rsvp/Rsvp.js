import _ from 'lodash';
import {Button, Image, Label, Icon} from 'semantic-ui-react';
import React, {Component} from 'react';

import firebase from 'firebase';
import * as rsvpdb from 'helpers/firebase/database/rsvp';

class Rsvp extends Component {

    state = {
        buttonToggle: false
        
    }

    componentWillMount() {

        const uid = firebase.auth().currentUser;
        if (uid === null) {
            console.log("not loged in");
        }else {
            firebase
                .database()
                .ref('rsvp')
                .child(this.props.month)
                .child(this.props.date)
                .child(this.props.index)
                .child('people')
                .on('value', (snap) => {
                    if (snap.val() !== null) {
                        snap.forEach((childSnap) => {
                            if (childSnap.key === uid.uid) {
                                this.setState({buttonToggle: true});
                            }
                        })
                    }
                });
        }
    }

    handleCheck = (user, id) => {
        const uid = firebase
            .auth()
            .currentUser;
        if (uid === null) {

            this
                .props
                .modal();
        } else {
            rsvpdb.addPhotoAndPeople(uid, this.props.index, this.props.month, this.props.date);
            this.setState({buttonToggle: true});
        }
    }
    handleUnCheck = (user, id) => {
        const uid = firebase
            .auth()
            .currentUser;
        rsvpdb.deletePhotoAndPoeple(uid, this.props.index, this.props.month, this.props.date);
        this.setState({buttonToggle: false});
    }

    renderPhotos = () => {

        if (window.innerWidth < 450) {
            return null;
        }
        if (_.size(this.props.rsvp.people) > 6) {
            let pictures = [];
            firebase
                .database()
                .ref('rsvp')
                .child(this.props.month)
                .child(this.props.date)
                .child(this.props.index)
                .child('people')
                .orderByChild('time')
                .limitToLast(6)
                .once('value', snap => {
                    snap.forEach(data => {
                        pictures.push(data.val().photo);

                    });
                    pictures.reverse();
                });
            return _.map(pictures, (photo) => {
                return (
                    <Image
                        key={photo.toString()}
                        className="pictures"
                        size="mini"
                        shape="circular"
                        src={photo}></Image>
                );
            });

        } else {
            return _.map(this.props.rsvp.people, (people, index) => {
                return (<Image
                    key={index}
                    className="pictures"
                    size="mini"
                    shape="circular"
                    src={people.photo}/>);
            });
        }

    }
   
    
    render() {
        const {handleUnCheck, handleCheck, renderPhotos} = this;
        const checkButton = {
            transition: "all .5s",
            backgroundColor: "#219945"
        }

        let manyPickturesToggle = _.size(this.props.rsvp.people) > 6;
        let noPickturesToggle;
        if (_.size(this.props.rsvp.people) === 0) {
            noPickturesToggle = true;
        } else {
            noPickturesToggle = false;
        }
        return (
            <div className="rsvp row" id={this.props.index}>
                <div className="goButton-wrapper">
                    <Button
                        circular
                        size='big'
                        active={this.state.buttonToggle}
                        onClick={this.state.buttonToggle
                        ? (user, id) => handleUnCheck(user, id)
                        : (user, id) => handleCheck(user, id)}
                        icon="checkmark"
                        className="goButton"
                        style={this.state.buttonToggle
                        ? checkButton
                        : null}
                        data-hover="Go?"/>

                </div>

                <span className="time">{this.props.rsvp.time}</span>

                <div className="pictures-wraaper">
                    {renderPhotos()}
                    {manyPickturesToggle
                        ? <Icon name="ellipsis horizontal"/>
                        : null}
                </div>

                <span className="number-wrapper">
                    {noPickturesToggle
                        ? null
                        : <Label circular size="big" className="number">
                            +{_.size(this.props.rsvp.people)}
                        </Label>}

                </span>

                

            </div>
        );
    }
}

export default Rsvp;
