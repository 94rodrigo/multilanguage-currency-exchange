import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CollapsibleNavbar from './Components/CollapsibleNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './Components/Footer';

function AppRoutes() {
   return (
    <BrowserRouter>
      <CollapsibleNavbar />
      
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
