
import React, {Component} from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';
class Introduction extends Component {
    render() {
       

        return (
        <ScrollableAnchor id={'HOME'}>
            <div className="introduction-wrapper">
                <div className="introduction">
                    <div className="introduction-description">
                        <div className="height-space"></div>
                        <div className="buttons-wrapper">
                        <a href="#INQUIRY" className="leftButton">
                                    <h2>INQUIRY</h2>
                                    <p>소개 및 문의<span className="xmHide"></span></p>
                                </a>
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