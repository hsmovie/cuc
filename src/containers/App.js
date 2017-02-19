import React, { Component } from 'react';
import * as header from 'redux/modules/base/header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginModal, { SocialLoginButton } from 'components/Base/LoginModal/LoginModal';
import * as modal from 'redux/modules/base/modal'
// load components
// 로고는 헤더의 멍청한 컴포넌트에서 추출해 온것.
import Header, {SidebarButton, BrandLogo, AuthButton} from 'components/Base/Header/Header';

class App extends Component {
 
   handleLoginModal = (() => {
       const { ModalActions } = this.props;
       return {
           open: () => {
               ModalActions.openModal({modalName: 'login'});
           },
           close: () => {
               ModalActions.closeModal('login');
           }
       }
   })()
    render() {
    const {children, status: {modal}} = this.props;
    const { handleLoginModal } = this;
        return (
            <div>
                <Header>
                    <SidebarButton />
                    <BrandLogo />
                    <AuthButton onClick={handleLoginModal.open}/>
                </Header> 
                <LoginModal visible={modal.getIn(['login', 'open'])} onHide={handleLoginModal.close}>
                    <SocialLoginButton type="google"/>
                    <SocialLoginButton type="facebook"/>
                </LoginModal>
                {children}
            </div>
        );
    }
}

export default connect(
    state => ({
        status: {
             modal: state.base.modal
        }
    }),
    dispatch => ({
        ModalActions: bindActionCreators(modal, dispatch)
    })
)(App); 