// Rota para aplicação terceirizada JumpTec
import { useEffect } from 'react';

const Simulator = () => {
  useEffect(() => {
    window.location.href = '/orcamento';
  }, []);

  return null;
};

export default Simulator;
