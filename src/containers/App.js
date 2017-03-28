import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as modal from 'redux/modules/base/modal'
import auth from 'helpers/firebase/auth';
// import LinkAccountModal from 'components/Base/LoginModal/LinkAccountModal';
// load components
// 로고는 헤더의 멍청한 컴포넌트에서 추출해 온것.
import Header, {BrandLogo, AuthButton, NavBar} from 'components/Base/Header/Header';
import * as Modals from 'components/Base/Modals';
const { LoginModal, LinkAccountModal, LogoutModal } = Modals; 
const { SocialLoginButton } = LoginModal;
import * as users from 'helpers/firebase/database/users';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggle: false
        }
    }


    componentWillMount(){
        
        auth.authStateChanged(
            async (firebaseUser) => {                
                if(firebaseUser){
                this.setState({toggle: true});
                    //confirm user's data exist,
                    const user = await users.findUserById(firebaseUser.uid);
                    if(!user.exists()){ 
                       await users.createUserData(firebaseUser);
                       console.log("Loged in !" ,firebaseUser);
                    }
                }else{
                    //다시 토글을 스위칭해서 로그인 / 회원가입 버튼 나오게 만든다.
                    this.setState({toggle: false});
                    console.log('not loged in');
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
                        credential: e.credential,
                        provider,
                        existingProvider
                    }
                });
            }
        }
        window.location.reload();
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
   })();

//Link Account
   handleLinkAccount = async () => {
       const { status : { modal } } = this.props;
       const credential = modal.getIn(['linkAccount', 'credential']);
       const provider = modal.getIn(['linkAccount', 'existingProvider']);
       const { handleModal } = this;
       console.log(credential, provider);
       await auth.linkAccount({credential, provider});

       handleModal.close('linkAccount');
   }
   
   handleLogout = () => {
       const {handleModal} = this;
       auth.logout();
       handleModal.close('logout');
   }

   renderChildren = (props) => {
       const {handleModal} = this ;
  const childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        loginModal: () => handleModal.open({modalName: 'login'})
      });
  });
    return childrenWithProps
}

    render() {
        
    const {status: {modal} } = this.props;
    
    const { handleAuth, handleModal, handleLinkAccount, handleLogout, renderChildren } = this;
    
    //토글 스테이트를 보고 버튼에 어떤 함수를 보내줄지 알아냄.
     const logoutToggle = this.state.toggle ? () => handleModal.open({modalName: 'logout'}) : () => handleModal.open({modalName:'login'}) ;

        return (
            <div>
                <Header>
                    
                    <BrandLogo />
                    <NavBar/>
                    <AuthButton onClick={logoutToggle} toggle={this.state.toggle}/>
                </Header> 
                <LoginModal visible={modal.getIn(['login', 'open'])} onHide={() => handleModal.close('login')}>
                    <SocialLoginButton onClick={() => handleAuth('google')} type="google"/>
                    <SocialLoginButton onClick={() => handleAuth('facebook')} type="facebook"/>
                </LoginModal>
                <LogoutModal
                    visible={modal.getIn(['logout', 'open'])}
                    onHide={() => handleModal.close('logout')}
                    logout={() => handleLogout()}
                />

                <LinkAccountModal 
                    visible={modal.getIn(['linkAccount', 'open'])} 
                    onHide={() => handleModal.close('linkAccount')} 
                    existingProvider={modal.getIn(['linkAccount', 'existingProvider'])}
                    provider={modal.getIn(['linkAccount', 'provider'])}
                    onLinkAccount={handleLinkAccount}
                />
                
                 {renderChildren()}
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