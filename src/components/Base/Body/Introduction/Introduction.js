// import BigLogo from './BigLogo'; import {Button} from 'semantic-ui-react'
import React, {Component} from 'react';
// import Typist from 'react-typist';
import TypeWriter from 'react-typewriter';


class Introduction extends Component {
    render() {
     

        return (
            

            <div className="introduction-wrapper">
                <div className="introduction">

                    <div className="introduction-description">
                        <div className="welcome-wrapper">
                            <div className="welcoming-sentences">
                                <div className="svg-wrapper">
                                    
                                    <div className="cuc">
                                        <p className="cucFirst">Culture lab Under the City
                                        </p>
                                        <p className="cucSecond">문화를 만드는 사람들
                                        </p>
                                    </div>
                                </div>

                                <div className="second-line">Don't Just Exist</div>
                                <div className="third-line">See you soon At CUC</div>
                            </div>

                        </div>
                        <div className="buttons-wrapper row">
                            <div className="leftButton">
                                <a  href="#RSVP">
                                    <h2>RSVP</h2>
                                    <p>모임참석신청을 해보세요.</p>
                                </a>
                            </div>
                            <div className="centerButton">
                                <a href="#STUDY">
                                    <h2>STUDY</h2>
                                    <p>다양한 스터디와 문화교류의 장이 펼쳐집니다.</p>
                                </a>
                            </div>
                            <div className="rightButton">
                                <a  href="#INQUIRY">
                                    <h2>INQUIRY</h2>
                                    <p>문의사항 및 건의사항</p>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Introduction;