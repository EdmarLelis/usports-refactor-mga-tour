import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import InfoCard from '../components/ui/InfoCard';

const Clubs = () => {
  return (
    <>
      <Header />
      <main>
        <InfoCard icon='🚧' title='Em desenvolvimento' message='Estamos preparando algo incrível 🚀'/>
      </main>
      <Footer />
    </>
  );
};

export default Clubs;
