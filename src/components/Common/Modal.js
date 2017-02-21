import React, { Component, PropTypes } from 'react';
import Dimmer from 'components/Common/Dimmer';
import EyeCatchy from 'components/Common/EyeCatchy';
class Modal extends Component {

    static propTypes = {
        //To hide Modal
        onHide: PropTypes.func,
        //To show Modal or not
        visible: PropTypes.bool,
        className: PropTypes.string
    }

    state = {
        closing: false
    }
    
    componentDidUpdate(prevProps, prevState) {
        //visible 값이 비활성화 되면 , closing 값을 true로 설정한다.
            //그다음 애니메이션 작동. 0.8초 뒤에 closing 값을 다시 false로 설정한다.
        if(prevProps.visible && !this.props.visible){
            this.setState({
                closing:true
            });

            setTimeout(
                () => {
                    this.setState({
                        closing:false
                    });
                }, 700
            );
        }
    }
     
    render() {
        const {children, visible, onHide, className } = this.props;
        const {closing} = this.state;

        if(!closing && !visible) return null;

        const animation = closing ? 'bounceOut' : 'bounceIn'; 
        
        // closing 이 false 고 
        return (
          <div>  
            <div className="modal-wrapper">
                <EyeCatchy onHide={onHide}>
                 <div ref={ref=>{this.modal = ref}} className={`modal ${animation} ${className}`}>
                    {children}
                </div>
                </EyeCatchy>
            </div>
            <Dimmer/> 
          </div>  
        );
    }
}

export default Modal;