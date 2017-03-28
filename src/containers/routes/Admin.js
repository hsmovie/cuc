import React, { Component } from 'react';
import {CardInputForm, CardManager, RsvpInputForm} from 'components/Base/Body/Admin';
import * as cardDB from 'helpers/firebase/database/card';

class Admin extends Component {
    state = {
            link:"",
            description:"",
            imageLink:""
        }
   
    addCardFirebase = () => {
    
        cardDB.addCard(this.state.link, this.state.description, this.state.imageLink);

    }

    render() {
        const {addCardFirebase} = this;
        const rsvps = Object.assign({}, this.props.rsvp, this.props.rsvpTwo, this.props.rsvpThree, this.props.rsvpFour, this.props.rsvpFive, this.props.rsvpSix, this.props.rsvpSeven,this.props.rsvpEight, this.props.rsvpNine, this.props.rsvpTen);
        return (
            <div>
                <CardInputForm
                    handleLink={(e) => this.setState({link: e.target.value})}
                    handleDescription={(e) => this.setState({description: e.target.value})}
                    handleImageLink={(e) => this.setState({imageLink: e.target.value})}
                    handleSubmit={() => addCardFirebase()}
                />
                <CardManager/>
                <RsvpInputForm/>
               
            </div>
        );
    }
}


export default Admin