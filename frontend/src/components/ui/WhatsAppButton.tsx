import React from 'react';
import whatsappIcon from '../../assets/img-whatsapp.png';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '556132632401';

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] group flex items-center gap-3"
    >
      <div className="w-12 h-12 overflow-hidden hover:scale-110 transition-transform active:scale-95">
        <img
          src={whatsappIcon}
          alt="WhatsApp Usports"
          className="w-full h-full object-cover"
        />
      </div>
    </a>
  );
};
