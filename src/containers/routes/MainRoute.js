import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import RsvpForm from 'components/Base/Body/RsvpForm';
// import Rsvp from 'components/Base/Body/Rsvp';
import Introduction from 'components/Base/Body/Introduction/Introduction';
import RsvpLayout, {Rsvp, RsvpForm} from 'components/Base/Body/Rsvp/RsvpLayout';
// import * as rsvp from 'redux/modules/base/rsvp';
import * as actions from 'redux/modules/base/rsvp';
class MainRoute extends Component {

    state = {
        selected: false,
        title: "",
        data:"",
        day:"",
        time:"",
        month:""
    }
    
    componentWillMount() {
    this.props.fetchRsvps();
  }

    handleFormSubmit = () => {
        this.props.createRsvp(this.state);
        
    }

    handleDelete = (key) => {
       this.props.deleteRsvp(key);
    }

  renderPosts = () => {
    const {handleDelete} = this;
    return _.map(this.props.rsvps, (rsvp, id) => {
      return (
          <Rsvp 
            handleDelete={() => handleDelete(id)}
            rsvp={rsvp}
            key={id}
          />
      );
    });
  }

    render() {
          const {renderPosts, handleFormSubmit} = this;
        return (

            <div> 
                <Introduction/>
                <RsvpLayout>
                <RsvpForm
                    onSubmit={() => handleFormSubmit()}
                    handleTitle={(e) => this.setState({title:e.target.value})}
                    handleTime={(e) => this.setState({time:e.target.value})}
                    
                    data={this.state}
                />    
                <div>
                    {renderPosts()}
                </div>
                </RsvpLayout>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {rsvps:state.base.rsvps};
}
export default connect(mapStateToProps, actions)(MainRoute); 
