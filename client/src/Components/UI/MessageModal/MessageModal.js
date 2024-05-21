import React from 'react';
import { ImCheckmark } from "react-icons/im";
import './messageModal.css';

const MessageModal = ({ message, onClose, isButtonVisible }) => {

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className='checkIcon'>
                    <ImCheckmark />
                </div>
                <p>{message}</p>
                { isButtonVisible ? <button onClick={onClose}>Close</button> : '' }
            </div>
        </div>
    );
};

export default MessageModal;