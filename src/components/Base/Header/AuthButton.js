import React, {PropTypes} from 'react';
import { Icon } from 'semantic-ui-react';

const AuthButton = ({onClick, toggle}) => {

    const view = toggle ? "로그아웃" : "로그인 / 회원가입";
    
    return (
        <div className="auth-button-wrapper">
             <div className="auth-button" onClick={onClick}>
                <Icon name="user" fitted/>{view}
            </div>
        </div>
        
    );
};

export default AuthButton;