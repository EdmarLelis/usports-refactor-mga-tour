import React, { useMemo, useState } from 'react';
import { Send } from 'lucide-react';

import athleteGif from '../../assets/contact-animation.gif';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

type ApiSuccessResponse = {
  message?: string;
};

type ApiErrorResponse = {
  error?: string;
  details?: unknown;
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const apiUrl = useMemo(() => {
    const url = import.meta.env.VITE_API_URL as string | undefined;
    return url?.replace(/\/+$/, '') ?? '';
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!apiUrl) {
      alert(
        'API não configurada. Verifique o VITE_API_URL no .env do frontend e reinicie o Vite.',
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const text = await response.text();
      const payload = text
        ? (JSON.parse(text) as ApiSuccessResponse & ApiErrorResponse)
        : {};

      if (response.ok) {
        alert(payload.message || 'Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', phone: '', message: '' });
        return;
      }

      alert(payload.error || 'Erro ao enviar mensagem.');
    } catch (err) {
      console.error(err);
      alert('Erro ao enviar mensagem.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-brand-gray py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10">
          <h2 className="text-white font-black text-2xl uppercase tracking-wider mb-8">
            Entre em Contato:
          </h2>

          <form className="space-y-6 max-w-md" onSubmit={handleSubmit}>
            <Input
              id="name"
              label="Nome"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={handleChange}
            />

            <Input
              id="phone"
              label="Celular"
              type="tel"
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={handleChange}
            />

            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
            />

            <div className="relative flex items-end gap-4">
              <TextArea
                id="message"
                label="Mensagem"
                rows={4}
                placeholder="Como podemos ajudar?"
                value={formData.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                className={`bg-transparent text-white hover:text-brand-orange transition-colors pb-4 ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                aria-label="Enviar mensagem"
                disabled={loading}
              >
                <Send size={32} />
              </button>
            </div>
          </form>
        </div>

        <div className="relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
            <div className="transform rotate-[-15deg] transition-transform duration-500 w-full">
              <img
                src={athleteGif}
                alt="Atleta Usports"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            <div className="absolute inset-0 bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
