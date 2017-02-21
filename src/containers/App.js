import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as modal from 'redux/modules/base/modal'
import auth from 'helpers/firebase/auth';

// import LoginModal, { SocialLoginButton } from 'components/Base/LoginModal/LoginModal';
// import LinkAccountModal from 'components/Base/LoginModal/LinkAccountModal';
// load components
// 로고는 헤더의 멍청한 컴포넌트에서 추출해 온것.
import Header, {SidebarButton, BrandLogo, AuthButton} from 'components/Base/Header/Header';

import * as Modals from 'components/Base/Modals';
const { LoginModal, LinkAccountModal } = Modals;
const { SocialLoginButton } = LoginModal;
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

    handleAuth = async (provider) => {
        const {handleModal} = this;

        this.handleModal.close('login');

        try {
            await auth[provider]();
        } catch (e) {
            //이미 존재하는 이메일일 경우 발생하는 레어
            if(e.code === 'auth/account-exists-with-different-credential'){
                //계정 링크를 시도한다.

                //어떤 프로바이더로 가입되어있는지 확인
                const existingProvider = await auth.getExistingProvider(e.email);
                //링크하시겠습니까? 모달을 띄워준다
                handleModal.open({
                    modalName: 'linkAccount',
                    data:{
                        error: e,
                        provider,
                        existingProvider
                    }
                });
            }
        }
    }

                    // auth.resolveDuplicate(error).then(
                    //     (response) => {console.log(response)}
                    // );
    

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
                <LinkAccountModal 
                    visible={modal.getIn(['linkAccount', 'open'])} 
                    onHide={() => handleModal.close('linkAccount')} 
                    existingProvider={modal.getIn(['linkAccount', 'existingProvider'])}
                    provider={modal.getIn(['linkAccount', 'provider'])}
                />
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