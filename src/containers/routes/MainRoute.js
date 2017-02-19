import React, { Component } from 'react';
import EyeCatchy from 'components/Common/EyeCatchy';
class MainRoute extends Component {
    
    state ={
        hide: false
    }

    handleHide = () => {
        this.setState({
            hide:true
        })
    }

    handleShow = () => {
        this.setState({
            hide:false
        })
    }

    render() {
        const {hide} = this.state ;
        const {handleHide, handleShow} = this;
         return (
            <div>
                <button onClick={handleShow}>Just Press!</button>
               <EyeCatchy hidden={hide} onHide={handleHide}>
                <div>
                    If I am clicked or press esc, Im gonna fade out.
                </div>
               </EyeCatchy>
            </div>
        );
    }
}

export default MainRoute;