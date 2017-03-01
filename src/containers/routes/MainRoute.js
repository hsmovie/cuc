import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import * as rsvp from 'redux/modules/base/rsvp';
import * as actions from 'redux/modules/base/rsvp';
class MainRoute extends Component {

    state = {
        title: "",
        body: ""
    }
    
    componentWillMount() {
    this.props.fetchRsvps();
  }

    handleFormSubmit(event) {
        event.preventDefault();

        this.props.createRsvp(this.state);
        
    }

    handleDelete = (key) => {
       this.props.deleteRsvp(key);
        
    }

    renderPosts = () => {
        const {handleDelete} = this;
    return _.map(this.props.rsvps, (rsvp, key) => {
      return (
          <li key={key}>
            <p>{rsvp.title}</p>
            <p>{rsvp.body}</p>
            <button onClick={() => handleDelete(key)}>DELETE</button>
            <hr/>
          </li>
      );
    });
  }

    render() {
          const {renderPosts} = this;
        return (

            <div>
                <div>
                    <form
                        onSubmit={this
                        .handleFormSubmit
                        .bind(this)}
                        className="form-inline">
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="Title"
                                value={this.state.title}
                                onChange={(e) => {
                                this.setState({title: e.target.value})
                            }}/>
                            <input
                                className="form-control"
                                placeholder="Body"
                                value={this.state.body}
                                onChange={(e) => {
                                this.setState({body: e.target.value})
                            }}/>
                            <button action="submit" className="btn btn-primary">Create Post</button>
                        </div>
                    </form>
                    <ul>
                    {renderPosts()}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {rsvps:state.base.rsvps};
}
export default connect(mapStateToProps, actions)(MainRoute); 
