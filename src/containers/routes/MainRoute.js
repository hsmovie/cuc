
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import * as rsvp from 'redux/modules/base/rsvp';
import * as modal from 'redux/modules/base/modal'
import * as rsvpdb from 'helpers/firebase/database/rsvp';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

// import * as Modals from 'components/Base/Modals';

// import auth from 'helpers/firebase/auth';
// const { LoginModal, LinkAccountModal } = Modals; 
// const { SocialLoginButton } = LoginModal;

// import RsvpForm from 'components/Base/Body/RsvpForm';
// import Rsvp from 'components/Base/Body/Rsvp';
import Introduction from 'components/Base/Body/Introduction/Introduction';
import Study from 'components/Base/Body/Study/Study';
import Footer from 'components/Base/Footer/Footer';
import RsvpLayout, { RsvpOne, RsvpTwo, RsvpThree, RsvpFour, RsvpFive, RsvpSix, RsvpSeven, RsvpEight, RsvpNine, RsvpTen } from 'components/Base/Body/Rsvp/RsvpLayout';

class MainRoute extends Component {
    
    render() {
        
        const d = new Date();
        const todayMonth = d.getMonth();
        
        // const monthAndDay = rsvpdb.getDate(todayMonth, todayDay, todayDate);
        const dateData = [];
        for(let i = 1 ; i < 10 ; i++){
            
            const todayDate = d.getDate()+i;
            const todayDay = d.getDay()+i;
             dateData[i] = rsvpdb.getDate(todayMonth, todayDay, todayDate);    
        }
        
        
        return (

            <div> 
                <Introduction/>
                
                <RsvpLayout>
            
                <RsvpOne loginModal={this.props.loginModal}/>
                <RsvpTwo dateData={dateData[1]} loginModal={this.props.loginModal}/>
                <RsvpThree dateData={dateData[2]} loginModal={this.props.loginModal}/>
                <RsvpFour dateData={dateData[3]} loginModal={this.props.loginModal}/>
                <RsvpFive dateData={dateData[4]} loginModal={this.props.loginModal}/>
                <RsvpSix dateData={dateData[5]} loginModal={this.props.loginModal}/>
                <RsvpSeven dateData={dateData[6]} loginModal={this.props.loginModal}/>
                <RsvpEight dateData={dateData[7]} loginModal={this.props.loginModal}/>
                <RsvpNine dateData={dateData[8]} loginModal={this.props.loginModal} />
                <RsvpTen dateData={dateData[9]} loginModal={this.props.loginModal}/>
                
                </RsvpLayout>

                <Study/>
                <Footer/>
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
)(MainRoute); 
