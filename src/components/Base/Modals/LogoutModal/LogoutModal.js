import React from 'react';
import Modal from 'components/Common/Modal';
import { Icon, Button } from 'semantic-ui-react';

const LogoutModal = ({onHide, visible, logout}) => {
    // scss클래스처리안함.
    return (
        <div>
               <Modal
                    onHide={onHide}
                    visible={visible}
                    className="logout-modal"
                    >
                <div className="title-bar">
                    <Icon name="warning circle" fitted/>
                </div>
                <div className="message">
                    <b>정말 로그아웃 하시겠습니까?</b>
                </div>
                <footer className="footer">
                    <Button color="teal" onClick={logout}>네</Button>
                    <Button color="red" onClick={onHide}>아니오</Button>
                </footer>
            </Modal>
        </div>
    );
};

export default LogoutModal;