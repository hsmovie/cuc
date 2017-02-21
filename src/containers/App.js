import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginModal, { SocialLoginButton } from 'components/Base/LoginModal/LoginModal';
import * as modal from 'redux/modules/base/modal'
import auth from 'helpers/firebase/auth';
import LinkAccountModal from 'components/Base/LoginModal/LinkAccountModal';
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
        this.handleModal.close('login');
        auth[provider]().catch(
            error => {
                if(error.code === 'auth/account-exists-with-different-credential'){
                    this.handleModal.open({
                        modalName:'linkAccount',
                        data: error
                    }) 

                    // auth.resolveDuplicate(error).then(
                    //     (response) => {console.log(response)}
                    // );
                }
            }
        );
    }

   handleModal = ((modalName) => {
       const { ModalActions } = this.props;
       return {
           open:({modalName, data}) => {
               ModalActions.openModal({modalName, data});
           },
           close: (modalName) => {
               ModalActions.closeModal(modalName);
           }
       }
   })()


   logOut = () => {
       auth.logout();
   }
    render() {
    const {children, status: {modal}} = this.props;
    const { handleAuth, logOut, handleModal } = this;
        return (
            <div>
                <Header>
                    <SidebarButton />
                    <BrandLogo />
                    <AuthButton onClick={() => handleModal.open({modalName:'login'})}/>
                </Header> 
                <LoginModal visible={modal.getIn(['login', 'open'])} onHide={() => handleModal.close('login')}>
                    <SocialLoginButton onClick={() => handleAuth('google')} type="google"/>
                    <SocialLoginButton onClick={() => handleAuth('facebook')} type="facebook"/>
                </LoginModal>
              <LinkAccountModal visible={modal.getIn(['linkAccount', 'open'])} onHide={() => handleModal.close('linkAccount')} />
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