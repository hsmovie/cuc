import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import RsvpForm from 'components/Base/Body/RsvpForm';
import Rsvp from 'components/Base/Body/Rsvp';
import Introduction from 'components/Base/Body/Introduction';
// import * as rsvp from 'redux/modules/base/rsvp';
import * as actions from 'redux/modules/base/rsvp';
import {SectionsContainer, Section} from 'react-fullpage';
class MainRoute extends Component {

    state = {
        title: "",
        body: ""
        
    }
    
    componentWillMount() {
    this.props.fetchRsvps();
  }

    handleFormSubmit = (event) => {
        event.preventDefault();

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
                <RsvpForm
                    onSubmit={(event) => handleFormSubmit(event)}
                    handleTitle={(e) => this.setState({title:e.target.value})}
                    handleBody={(e) => this.setState({body:e.target.value})}
                    title={this.state.title}
                    body={this.state.body}
                />    
                {renderPosts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {rsvps:state.base.rsvps};
}
export default connect(mapStateToProps, actions)(MainRoute); 
