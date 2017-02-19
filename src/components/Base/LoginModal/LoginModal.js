import React, { Component } from 'react';
import Dimmer from 'components/Common/Dimmer';
import EyeCatchy from 'components/Common/EyeCatchy';
class LoginModal extends Component {
    
    render() {
        const {children, visible } = this.props;
        return (
          <div>  
            <div className="login-modal-wrapper">
                <EyeCatchy hidden={!visible}>
                    <div className="login-modal bounceIn">
                    <div className="exit">&#x2715;</div>
                    <div className="logo">BrandLogo</div>
                    <div className="description">
                        <p> Culture Lab Under The City</p>
                        <p> Don't Just Exist</p>                  
                    </div>
                    <div className="buttons-wrapper">
                        {children}
                    </div>
                    </div>
                </EyeCatchy>
            </div>
            { visible && <Dimmer/> }
          </div>  
        );
    }
}
export { default as SocialLoginButton } from './SocialLoginButton';
export default LoginModal;