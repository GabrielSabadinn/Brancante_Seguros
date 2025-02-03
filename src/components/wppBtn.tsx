import '../styles/wppBtnStyle.css';
import { texts } from '../constants/texts';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
    width?: string;
    height?: string;
}

export function WppBtn({ width, height }: WhatsAppButtonProps) {
    async function handleOpenWhatsApp() {
        const url = 'https://wa.link/lmtfsw';
        window.open(url, '_blank');
    }

    return (
        <button
            className="whatsapp-button"
            style={{
                width: width || '100%',
                height: height || '40px',
            }}
            onClick={handleOpenWhatsApp}
        >
            {/* <Ionicons name="logo-whatsapp" size={16} color="white" />*/}
            <FaWhatsapp size={20} color="#ffffff" />
            <span className="whatsapp-button-text">{texts.readingBtnWpp}</span>
        </button>
    );
}
