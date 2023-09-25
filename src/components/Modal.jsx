import React from 'react';

function Modal({isOpen, setIsOpen, children}) {

    if (!isOpen) return null;

    return (
        <div className='custom__modal'>
            <div className='custom__modal-content'>
                {children}
            </div>
            
        </div>
    );
}

export default Modal;