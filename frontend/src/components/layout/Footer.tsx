import React from 'react';
import { Instagram, Facebook, Music2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-gray text-white pt-16 pb-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <h4 className="font-bold text-lg uppercase tracking-wider">
              Categorias
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-brand-orange cursor-pointer transition-colors">
                <a href="/fabricacao">
                  Fabricação
                </a>
              </li>
              <li className="hover:text-brand-orange cursor-pointer transition-colors">
                Clubes
              </li>
              <li className="hover:text-brand-orange cursor-pointer transition-colors">
                <a href="/simulador">
                Orçamento
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg uppercase tracking-wider">
              Links Úteis
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-brand-orange cursor-pointer transition-colors">
                <a href="/termo">
                  Termos e Condições de Compra
                </a>
              </li>
              <li className="hover:text-brand-orange cursor-pointer transition-colors">
                Política de Frete Grátis
              </li>
              <li className="hover:text-brand-orange cursor-pointer transition-colors">
                Perguntas frequentes
              </li>
              <li className="hover:text-brand-orange cursor-pointer transition-colors">
                Sobre nós
              </li>
              <li className="hover:text-brand-orange cursor-pointer transition-colors">
                Contato
              </li>
              <li className="hover:text-brand-orange cursor-pointer transition-colors">
                Política de Pré-Venda
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg uppercase tracking-wider">
              Entre em contato
            </h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Telefone: +55 61 3263-2401</p>
              <p>comercial@usportsbr.com</p>
              <p className="mt-4">
                Vicente Pires, Brasília - DF, 72005-080 (EPTG KM 7.2 em frente
                ao viaduto Israel Pinheiro)
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.instagram.com/unipaperoficial/"
                className="bg-brand-dark p-3 rounded-lg hover:bg-brand-orange transition-all"
                target='blank'
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/p/Unipaper-61558664789853/"
                className="bg-brand-dark p-3 rounded-lg hover:bg-brand-orange transition-all"
                target='blank'
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@unipaperpapelaria"
                className="bg-brand-dark p-3 rounded-lg hover:bg-brand-orange transition-all"
                target='blank'
              >
                <Music2 size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-3">
            <p className="text-xs uppercase font-bold text-gray-500">
              Meios de pagamento
            </p>
            <div className="flex flex-wrap gap-2">
              {['VISA', 'MASTERCARD', 'AMEX', 'ELO', 'PIX'].map((card) => (
                <span
                  key={card}
                  className="bg-brand-dark px-3 py-1 rounded text-[10px] font-bold border border-white/5"
                >
                  {card}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase font-bold text-gray-500">
              Meios de envio
            </p>
            <div className="flex flex-wrap gap-2">
              {['Correios', 'Transportadora'].map((envio) => (
                <span
                  key={envio}
                  className="bg-brand-dark px-3 py-1 rounded text-[10px] font-bold border border-white/5"
                >
                  {envio}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
