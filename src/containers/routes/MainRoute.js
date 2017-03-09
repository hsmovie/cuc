
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import RsvpForm from 'components/Base/Body/RsvpForm';
// import Rsvp from 'components/Base/Body/Rsvp';
import Introduction from 'components/Base/Body/Introduction/Introduction';
import RsvpLayout, { RsvpOne } from 'components/Base/Body/Rsvp/RsvpLayout';


// import * as rsvp from 'redux/modules/base/rsvp';
import * as actions from 'redux/modules/base/rsvp';
class MainRoute extends Component {
    state = {
        selected: false,
        title: "",
        time:"",
        people:0
    }
    
    componentWillMount() {
    
  }

  

    handleFormSubmit = () => {
        this.props.createRsvp(this.state);
    }

    


  
    render() {
          const { handleFormSubmit} = this;
        return (

            <div> 
                <Introduction/>
                
                <RsvpLayout>
                
                <RsvpOne/>

                </RsvpLayout>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.base;
}
export default connect(mapStateToProps, actions)(MainRoute); 
