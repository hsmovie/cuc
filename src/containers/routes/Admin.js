import React, { Component } from 'react';
import CardInputForm from 'components/Base/Body/Admin/CardInputForm';
import * as cardDB from 'helpers/firebase/database/card';
class Admin extends Component {
    state = {
            title:"",
            link:"",
            description:"",
            imageLink:""
        }

    addCardFirebase = () => {
    
        cardDB.addCard(this.state.title, this.state.link, this.state.description, this.state.imageLink);

    }

    render() {
        const {addCardFirebase} = this;
        return (
            <div>
                <CardInputForm
                    handleTitle={(e) => this.setState({title: e.target.value})}
                    handleLink={(e) => this.setState({link: e.target.value})}
                    handleDescription={(e) => this.setState({description: e.target.value})}
                    handleImageLink={(e) => this.setState({imageLink: e.target.value})}
                    handleSubmit={() => addCardFirebase()}
                />
            </div>
        );
    }
}

export default Admin; 