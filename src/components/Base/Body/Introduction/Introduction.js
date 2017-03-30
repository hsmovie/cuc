// import BigLogo from './BigLogo'; import {Button} from 'semantic-ui-react'
import React, {Component} from 'react';
// import Typist from 'react-typist';
// import TypeWriter from 'react-typewriter';
//  typing={1} maxDelay={100} minDelay={30}
import ScrollableAnchor from 'react-scrollable-anchor';
class Introduction extends Component {
    render() {
       

        return (
        <ScrollableAnchor id={'HOME'}>
            <div className="introduction-wrapper">
                <div className="introduction">

                    <div className="introduction-description">
                        <div className="welcome-wrapper">
                            <div className="welcoming-sentences">
                                <div className="svg-wrapper">

                                    <div className="cuc">
                                        <p className="cucFirst">
                                            <span className="span">
                                                <span className="C">C</span>ulture lab</span>
                                            <span className="span">
                                                <span className="C"> U</span>nder the</span>
                                            <span className="span">
                                                <span className="C"> C</span>ity</span>
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
        
                            
                            
                                <a href="#STUDY" className="centerButton">
                                    <h2>STUDY</h2>
                                    <p>다양한 스터디<span className="xmHide">와 문화교류의 장이 펼쳐집니다.</span></p>
                                </a>
                            
                            
                                <a href="#RSVP" className="rightButton">
                                    <h2>RSVP</h2>
                                    <p>모임참석신청<span className="xmHide">을 해보세요.</span></p>
                                </a>
                            

                        </div>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>

        );
    }
}

export default Introduction;