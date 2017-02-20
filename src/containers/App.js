import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginModal, { SocialLoginButton } from 'components/Base/LoginModal/LoginModal';
import * as modal from 'redux/modules/base/modal'
import auth from 'helpers/firebase/auth';
// load components
// 로고는 헤더의 멍청한 컴포넌트에서 추출해 온것.
import Header, {SidebarButton, BrandLogo, AuthButton} from 'components/Base/Header/Header';
import * as users from 'helpers/firebase/database/users';

class App extends Component {

    componentDidMount(){
        auth.authStateChanged(
            async (firebaseUser) => {                
                if(firebaseUser){
                    //confirm user's data exist,
                    const user = await users.findUserById(firebaseUser.uid);
                    if(!user.exists()){ 
                       await users.createUserData(firebaseUser);
                    }
                
                console.log("you are logined in!", firebaseUser);
                }else{
                    console.log("nono", );
                }
            }
        );
    }

    handleAuth = (provider) => {
        auth[provider]().catch(
            error => {
                if(error.code === 'auth/account-exists-with-different-credential'){
                    auth.resolveDuplicate(error).then(
                        (response) => {console.log(response)}
                    );
                }
            }
        );
    }
 
   handleLoginModal = (() => {
       
       const { ModalActions } = this.props;
       console.log(ModalActions)
       return {
           open: () => {
               ModalActions.openModal({modalName: 'login'});
           },
           close: () => {
               ModalActions.closeModal('login');
           }
       }
   })()

   logOut = () => {
       auth.logout();
   }
    render() {
    const {children, status: {modal}} = this.props;
    const { handleLoginModal, handleAuth, logOut } = this;
        return (
            <div>
                <Header>
                    <SidebarButton />
                    <BrandLogo />
                    <AuthButton onClick={handleLoginModal.open}/>
                </Header> 
                <LoginModal visible={modal.getIn(['login', 'open'])} onHide={handleLoginModal.close}>
                    <SocialLoginButton onClick={() => handleAuth('google')} type="google"/>
                    <SocialLoginButton onClick={() => handleAuth('facebook')} type="facebook"/>
                </LoginModal>
                {children}
                <button onClick={() => logOut()}></button>
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