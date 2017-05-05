import React, {Component} from 'react';
import {CardInputForm, CardManager, RsvpInputForm, RsvpManager} from 'components/Base/Body/Admin';
import * as cardDB from 'helpers/firebase/database/card';
import * as rsvpDB from 'helpers/firebase/database/rsvp';
import {connect} from 'react-redux';
import * as rsvp from 'redux/modules/base/rsvp';
import auth from 'helpers/firebase/auth';
import * as users from 'helpers/firebase/database/users';
class Admin extends Component {

    componentWillMount() {
        this
            .props
            .getFirstRsvps();
        this
            .props
            .getSecondRsvps();
        this
            .props
            .getThirdRsvps();
        this
            .props
            .getFourthRsvps();
        this
            .props
            .getFifthRsvps();
        this
            .props
            .getSixthRsvps();
        this
            .props
            .getSeventhRsvps();
        this
            .props
            .getEighthRsvps();
        this
            .props
            .getNinthRsvps();
        this
            .props
            .getTenthRsvps();
    }
    state = {
        link: "",
        description: "",
        imageLink: "",

        month: "",
        date: "",
        title: "",
        time: "",
        day: "",

        checkAdmin: false
    }

    omponentWillMount() {

        auth.authStateChanged(async(firebaseUser) => {
            if (firebaseUser) {
                if (firebaseUser.uid === "pXrzS2OyGiYFNIDVYnlgPBB1ABd2" || "kLGaQdFaciTQhYACi7gHyCJ0eqv1") {
                    this.setState({checkAdmin: true});
                } else {
                    //다시 토글을 스위칭해서 로그인 / 회원가입 버튼 나오게 만든다.
                    this.setState({checkAdmin: false});
                    console.log('you are not admin');
                }
            }

        });
    }

    addCardFirebase = () => {
        cardDB.addCard(this.state.link, this.state.description, this.state.imageLink);
    }

    addRsvpFirebase = () => {
        console.log(this.state.day);
        rsvpDB.addRsvp(this.state.month, this.state.date, this.state.title, this.state.time, this.state.day);
    }

    render() {
        const {addCardFirebase, addRsvpFirebase} = this;

        const d = new Date();
        const todayMonth = d.getMonth();

        const dateData = [];
        for (let i = 0; i < 10; i++) {

            const todayDate = d.getDate() + i;
            const todayDay = d.getDay() + i;
            dateData[i] = rsvpDB.getDate(todayMonth, todayDay, todayDate);
        }
        // const rsvpData = Object.assign({},
        // this.props.rsvp,this.props.rsvpTwo,this.props.rsvpThree,this.props.rsvpFour,th
        // is.props.rsvpFive,this.props.rsvpSix,this.props.rsvpSeven,this.props.rsvpEight
        // ,this.props.rsvpNine,this.props.rsvpTen);

        return (


            

               <div><CardInputForm
                    handleLink={(e) => this.setState({link: e.target.value})}
                    handleDescription={(e) => this.setState({description: e.target.value})}
                    handleImageLink={(e) => this.setState({imageLink: e.target.value})}
                    handleSubmit={() => addCardFirebase()}/>
                <CardManager/>
                <RsvpInputForm
                    handleTitle={(e) => this.setState({title: e.target.value})}
                    handleDate={(e) => this.setState({date: e.target.value})}
                    handleMonth={(e) => this.setState({month: e.target.value})}
                    handleTime={(e) => this.setState({time: e.target.value})}
                    handleDay={(e) => this.setState({day: e.target.value})}
                    handleSubmit={() => addRsvpFirebase()}/>
                <RsvpManager
                    rsvp={this.props.rsvp}
                    rsvpTwo={this.props.rsvpTwo}
                    rsvpThree={this.props.rsvpThree}
                    rsvpFour={this.props.rsvpFour}
                    rsvpFive={this.props.rsvpFive}
                    rsvpSix={this.props.rsvpSix}
                    rsvpSeven={this.props.rsvpSeven}
                    rsvpEight={this.props.rsvpEight}
                    rsvpNine={this.props.rsvpNine}
                    rsvpTen={this.props.rsvpTen}
                    dateData={dateData}/> </div>
                

            
        );
    }
}

const mapStateToProps = (state) => {
    return {

        rsvp: state.base.rsvp.rsvp,
        rsvpTwo: state.base.rsvp.rsvpTwo,
        rsvpThree: state.base.rsvp.rsvpThree,
        rsvpFour: state.base.rsvp.rsvpFour,
        rsvpFive: state.base.rsvp.rsvpFive,
        rsvpSix: state.base.rsvp.rsvpSix,
        rsvpSeven: state.base.rsvp.rsvpSeven,
        rsvpEight: state.base.rsvp.rsvpEight,
        rsvpNine: state.base.rsvp.rsvpNine,
        rsvpTen: state.base.rsvp.rsvpTen

    };
}
export default connect(mapStateToProps, rsvp)(Admin);