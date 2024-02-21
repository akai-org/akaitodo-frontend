import React, { useState } from 'react';
import Modal from './ModalWidget'

const useModal = () => {
    const modalOn = true;
    const [returnValue, setReturnValue] = useState(false);

    if (returnValue) {
        console.log("Confirmed");
        setReturnValue(false);
    }

    return (
        <Modal 
            header="Header" 
            paragraph="paragraphhhh" 
            modalOn={modalOn}
            onConfirm={(value) => setReturnValue(value)}
        />
    );
}

export default useModal;