import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { WhatsAppButton } from './components/ui/WhatsAppButton';
import Home from './pages/Home';
import Fabrication from './pages/Fabrication';
// import Clubs from './pages/Clubs';
import Simulator from './pages/Simulator';
import TermsOfAgreement from './pages/TermsOfAgreement';

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-brand-dark flex flex-col bg-brand-gray">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fabricacao" element={<Fabrication />} />
              {/* <Route path="/clubes" element={<Clubs />} /> */}
              <Route path="/simulador" element={<Simulator />} />
              <Route path="/termo" element={<TermsOfAgreement />} />
            </Routes>
          </div>
          <WhatsAppButton />
        </div>
      </Router>
    </>
  );
}

export default App;
