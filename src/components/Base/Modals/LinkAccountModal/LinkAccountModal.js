import React from 'react';
import Modal from 'components/Common/Modal';
import { Icon, Button } from 'semantic-ui-react';
const LinkAccountModal = ({onHide, visible, existingProvider, provider, onLinkAccount}) => {
    return (
        <Modal
            onHide={onHide}
            visible={visible}
            className="link-account-modal"
        >
            <div className="title-bar">
                <Icon name="warning circle" fitted/>
            </div>
            <div className="message">
                <p><b>{existingProvider}</b> 계정으로 이미 가입되어 있습니다.</p>
                <p><b>{provider}</b> 계정으로 로그인 하시겠습니까?</p>
                <p className="warning"><b>아니오</b> 를 누르면 로그인이 취소됩니다.</p>
            </div>
            <footer className="footer">
                <Button color="teal" onClick={onLinkAccount}>네</Button>
                <Button color="red" onClick={onHide}>아니오</Button>
            </footer>
        </Modal>
    );
};

export default LinkAccountModal;