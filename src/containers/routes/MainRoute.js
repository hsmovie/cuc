import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import RsvpForm from 'components/Base/Body/RsvpForm';
// import Rsvp from 'components/Base/Body/Rsvp';
import Introduction from 'components/Base/Body/Introduction/Introduction';
import RsvpLayout, {Rsvp, RsvpForm, RsvpTime} from 'components/Base/Body/Rsvp/RsvpLayout';
import {Container, Row, Col} from 'react-grid-system';
// import * as rsvp from 'redux/modules/base/rsvp';
import * as actions from 'redux/modules/base/rsvp';
class MainRoute extends Component {
    state = {
        selected: false,
        title: "",
        time:"",
        people:0,
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

  renderRsvps = () => {
    const {handleDelete} = this;
    console.log(this.props.rsvp);
    const d = new Date();
    const todayYear = String(d.getFullYear());
    const todayDate = String(d.getDate());
    return _.map(this.props.rsvp, (rsvp, id) => {
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
          const {renderRsvps, handleFormSubmit} = this;
          
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
                <Container>
                <Row>
                <Col sm={4}>
                <RsvpTime/>
                </Col>
                <Col sm={8}>
                <ul>
                    {renderRsvps()}
                </ul>
                </Col>
                </Row>
                </Container>
                </RsvpLayout>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.base;
}
export default connect(mapStateToProps, actions)(MainRoute); 
