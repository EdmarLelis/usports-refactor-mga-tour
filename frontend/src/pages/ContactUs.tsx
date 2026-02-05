import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import InfoCard from '../components/ui/InfoCard';

const ContactUs = () => {
  return (
    <>
      <Header />
      <main>
        <InfoCard
          icon="📞"
          title="Contato"
          message={
            <div className="mb-6 text-sm leading-relaxed space-y-2">
              <p>
                <strong>Site:</strong> usportsbsb.com
              </p>
              <p>
                <strong>Email:</strong> comercial@usportsbr.com
              </p>
              <p>
                <strong>WhatsApp:</strong> +55 (61) 3263-2401
              </p>
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;