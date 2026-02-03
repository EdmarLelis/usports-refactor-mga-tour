import { Header } from '../components/layout/Header';
import { Banner } from '../components/layout/Banner';
import { AthleteGallery } from '../components/layout/AthleteGallery';
import { Partners } from '../components/layout/Partners';
import { Products } from '../components/layout/Products';
import { Contact } from '../components/layout/Contact';
import { Footer } from '../components/layout/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main className="pt-20 bg-brand-gray">
        <Banner />
        <AthleteGallery />
        <Partners />
        <br />
        <br />
        <Products />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
