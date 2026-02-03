import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import { createPortal } from 'react-dom';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const linkClass =
    'text-xl font-bold text-white hover:text-brand-orange transition-all';

  return createPortal(
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-brand-gray z-[9999] p-8 shadow-2xl transform transition-transform duration-300 ease-in-out border-l border-white/10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <NavLink to="/" onClick={onClose}>
            <img src={logoImg} alt="USPORTS" className="w-35" />
          </NavLink>

          <button
            onClick={onClose}
            className="text-white text-4xl p-2 hover:text-brand-orange transition-colors"
          >
            &times;
          </button>
        </div>

        <nav className="flex flex-col gap-8">
          <NavLink to="/" onClick={onClose} className={linkClass}>
            HOME
          </NavLink>

          <NavLink to="/fabricacao" onClick={onClose} className={linkClass}>
            FABRICAÇÃO
          </NavLink>

          {/* <NavLink to="/clubes" onClick={onClose} className={linkClass}>
            CLUBES
          </NavLink> */}

          <NavLink to="/simulador" onClick={onClose}>
            <Button variant="primary" fullWidth className="mt-4">
              SIMULADOR
            </Button>
          </NavLink>
        </nav>
      </aside>
    </>,
    document.body,
  );
};
