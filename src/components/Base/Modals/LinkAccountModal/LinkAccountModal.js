import React from 'react';
import Modal from 'components/Common/Modal';
const LinkAccountModal = ({onHide, visible, currentProvider, newProvider}) => {
    return (
        <Modal
            onHide={onHide}
            visible={visible}
            className="link-account-modal"
        >
            Testing.......
        </Modal>
    );
};

export default LinkAccountModal;