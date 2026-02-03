import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import { useDisclosure } from '../../hooks/useDisclosure';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const { isOpen, open, close } = useDisclosure();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-bold transition-colors ${
      isActive ? 'text-brand-orange' : 'hover:text-brand-orange'
    }`;

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-brand-gray/90 backdrop-blur-md z-30 border-b border-white/5">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-black italic tracking-tighter">
          <img src={logoImg} alt="USPORTS" className="w-35" />
        </NavLink>

        <nav className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={linkClass}>
            HOME
          </NavLink>

          <NavLink to="/fabricacao" className={linkClass}>
            FABRICAÇÃO
          </NavLink>

          {/* <NavLink to="/clubes" className={linkClass}>
            CLUBES
          </NavLink> */}

          <NavLink to="/simulador">
            <Button variant="primary" className="ml-4">
              SIMULADOR
            </Button>
          </NavLink>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 hover:brightness-110"
          onClick={open}
          aria-label="Abrir Menu"
        >
          <span className="w-6 h-0.5 bg-brand-orange"></span>
          <span className="w-3 h-0.5 bg-brand-orange self-end"></span>
          <span className="w-6 h-0.5 bg-brand-orange"></span>
        </button>
      </div>

      <MobileMenu isOpen={isOpen} onClose={close} />
    </header>
  );
};
