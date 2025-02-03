import React from "react";
import "../styles/adCardModalStyle.css";
import { WppBtn } from "./wppBtn";

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    title: string;
    description: string;
    imageSrc?: React.ReactNode;
    hasWhatsAppButton?: boolean;
}

const AdCardModal: React.FC<ModalProps> = ({ isVisible, onClose, title, description, imageSrc, hasWhatsAppButton = false }) => {
    if (!isVisible) return null;

    const closeOnBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    const formattedDescription = description.split('\n').map((line, index) => (
        <span key={index}>
            {line}
            {index < description.split('\n').length - 1 && <br />}
        </span>
    ));

    return (
        <div className="modal-container" onClick={closeOnBackgroundClick}>
            <div className="modal-content">
                <div className="modal-header" style={{ backgroundImage: imageSrc ? `url(${imageSrc})` : "none" }}>
                    <button className="modal-close-button" onClick={onClose}>✖</button>
                </div>
                <div className="modal-body">
                    <h2 className="modal-title">{title}</h2>
                    <p className="modal-body-text">{formattedDescription}</p>
                    {hasWhatsAppButton ? <WppBtn /> : null}
                </div>
            </div>
        </div>
    );
};

export default AdCardModal;
