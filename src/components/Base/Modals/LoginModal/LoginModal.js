import React, { Component } from 'react';
import Dimmer from 'components/Common/Dimmer';
import EyeCatchy from 'components/Common/EyeCatchy';
import SocialLoginButton from './SocialLoginButton';
class LoginModal extends Component {
    state = {
        closing: false
    }
    componentDidUpdate(prevProps, prevState) {
        //visible 값이 비활성화 되면 , closing 값을 true로 설정한다.
            //그다음 애니메이션 작동. 0.8초 뒤에 closing 값을 다시 false로 설정한다.
        if(prevProps.visible && !this.props.visible){
            this.setState({
                closing:true
            });

            setTimeout(
                () => {
                    this.setState({
                        closing:false
                    });
                }, 700
            );
        }
    }
     
    render() {
        const {children, visible, onHide } = this.props;
        const {closing} = this.state;

        if(!closing && !visible) return null;

        const animation = closing ? 'bounceOut' : 'bounceIn'; 
        
        // closing 이 false 고 
        return (
          <div>  
            <div className="login-modal-wrapper">
                <EyeCatchy onHide={onHide}>
                    <div className={`login-modal ${animation}`}>
                    <div className="exit" onClick={onHide}>&#x2715;</div>
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
            <Dimmer/> 
          </div>  
        );
    }
}

LoginModal.SocialLoginButton = SocialLoginButton;
export { default as SocialLoginButton } from './SocialLoginButton';
export default LoginModal;