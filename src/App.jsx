import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import Layout from './components/Layout';

import Home from './pages/Home';
import GameDetail from './pages/GameDetail';
import Extra from './pages/Extra';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      
      <AppNavbar />
      
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhe/:id" element={<GameDetail />} />
          <Route path="/extra" element={<Extra />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </Layout>

      <Footer />
    </BrowserRouter>
  );
}

export default App;