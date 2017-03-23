import React from 'react';
// import BigLogo from './BigLogo';
import {Button} from 'semantic-ui-react'
const Introduction = () => {

    

    return (
        
        <div className="introduction-wrapper">
            <div className="introduction">
                
                <div className="introduction-description">
                   <div className="welcome-wrapper">
                     <div className="welcoming-sentences fadeInLeft">
                        <div className="cuc">CulturelabUntheCity</div>
                        <p className="second-line">Don't Just Exist</p>
                        <p className="third-line">See you soon At CUC</p>
                     </div>
                     
                   </div>
                   <div className="buttons-wrapper row">
                   <div className="leftButton">
                   <a>
                    <h2>RSVP</h2>
                    <p>모임참석신청을 해보세요.</p>
                   </a>
                   </div>
                   <div className="centerButton">
                   <a>
                    <h2>STUDY</h2>
                    <p>다양한 스터디와 문화교류의 장이 펼쳐집니다.</p>
                   </a>
                   </div>
                   <div className="rightButton">
                   <a>
                   <h2>INQUIRY</h2>
                    <p>문의사항 및 건의사항</p>
                   </a>
                   </div>
                   
                        
                   </div>
                </div>
            </div>
        </div>
      
    );
};

export default Introduction;
