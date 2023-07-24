import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = (props) => {

    return (
        <div className='modalContainer' onClick={props.closeModal}>
            <div className='modal' >
                Employee created !
                <div className='close'>
                    <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default Modal;