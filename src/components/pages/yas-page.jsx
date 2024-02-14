import { useState } from 'react';
import React from "react";
import './yas-page.css'


const Modal = ({ onClose, children }) => {
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                {children}
                <button className='button-80' onClick={onClose}>Zavřít</button>
            </div>
        </div>
    );
};




const YasPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (

        <div className="yes-main-con">
            <div className="container-top cont">
                <h1 className='nadpis'>Hurááááááááááááááááááááááááááá!!!</h1>
                <img src="/videos/happy2.gif"></img>
                <h1 className='nadpis'>🤍🥺🤍 Miluju tě 🤍🥹🤍</h1>
                <button class="button-80" role="button" onClick={handleOpenModal}>Obdržet dáreček</button>
                {isModalOpen && <Modal onClose={handleCloseModal}>
                    <h1 className='darecek-message'>❤️🩷🤍🩵💜🩷🧡💛💚💙🤍🩶</h1>
                    <h1 className='darecek-message ukol'>Nový úkol:</h1>
                    <h1 className='darecek-message'>Promluv si se Zbyňou</h1>
                    <h1 className='darecek-message'>🥰😘🥰</h1>
                </Modal>}
            </div>
            <div className="container-mid cont">

            </div>
        </div>

    )
}

export default YasPage;