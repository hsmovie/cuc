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
        const uid = firebase
            .auth()
            .currentUser;
        if (uid === null) {
            console.log("not loged in");
        } else {
            firebase
                .database()
                .ref('rsvp')
                .child(this.props.month)
                .child(this.props.date)
                .child(this.props.index)
                .child('people')
                .once('value', (snap) => {
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
        }else{
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
        if (_.size(this.props.rsvp.people) > 7) {
            let pictures = {};
            firebase
                .database()
                .ref('rsvp')
                .child(this.props.month)
                .child(this.props.date)
                .child(this.props.index)
                .child('people')
                .limitToFirst(7)
                .once('value', snap => {
                    console.log(snap.val());
                    pictures = snap.val();
                });
            return _.map(pictures, (people, index) => {

                return (
                    <Image
                        key={index}
                        className="pictures"
                        size="mini"
                        shape="circular"
                        src={people.photo}></Image>
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
    // <Image floated="right" size="mini" shape="circular"
    // src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4
    // 2 52rscbv5M/photo.jpg"/>
    render() {
        const {handleUnCheck, handleCheck, renderPhotos} = this;
        const checkButton = {
            transition: "all .5s",
            backgroundColor: "#219945",
            fontSize: "1.3rem"
        }

        let manyPickturesToggle = _.size(this.props.rsvp.people) > 7;

        return (
            <div className="rsvp" id={this.props.index}>
                <Button
                    circular
                    size='big'
                    active={this.state.buttonToggle}
                    onClick={this.state.buttonToggle
                    ? (user, id) => handleUnCheck(user, id)
                    : (user, id) => handleCheck(user, id)}
                    icon="checkmark"
                    style={this.state.buttonToggle
                    ? checkButton
                    : null}
                    className="goButton"
                    data-hover="Go?"/>

                <span className="time">{this.props.rsvp.time}</span>

                <div className="pictures-wraaper">
                    {renderPhotos()}
                    {manyPickturesToggle
                        ? <Icon name="ellipsis horizontal"/>
                        : null}
                </div>

                <Button className="dltButton" onClick={this.props.handleDelete}>DELETE</Button>
                <span className="number">
                    <Label circular size="big">+{this.props.rsvp.number}</Label>
                </span>

            </div>
        );
    }
}

export default Rsvp;
