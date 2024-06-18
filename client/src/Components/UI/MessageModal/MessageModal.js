import React from 'react';
import { ImCheckmark } from "react-icons/im";
import './messageModal.css';

const MessageModal = ({ message, onClose, isButtonVisible }) => {

    return (
        <div className="modal-overlay">
            <div className="messageModal-content">
                <div className='checkIcon'>
                    <ImCheckmark />
                </div>
                <p className='message'>{message}</p>
                { isButtonVisible ? <button className='messageModalButton' onClick={onClose}>Close</button> : '' }
            </div>
        </div>
    );
};

export default MessageModal;