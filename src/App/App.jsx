// CSS
import './App.css'

//Reactte
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

//i18n
import '../i18n.js';

//Import
import { ThemeProvider } from '../provider/ThemeProvider.jsx';

//Components
import NavBar from '../components/layout/NavBar/NavBar.jsx';
import Footer from "../components/layout/Footer/Footer.jsx";

//Page
import Home from '../page/Home/Home';
import Error404 from '../page/Error404/Error404';
import LegalNotice from '../page/LegalNotice/LegalNotice'; 
import SiteMap from '../page/SiteMap/SiteMap'; 

//Data
import DataProvider from '../provider/DataProvider.jsx'

function App() {


  return (
    <BrowserRouter >
      <ThemeProvider>
        <DataProvider>
          <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/legal-notice" element={<LegalNotice />} />
                <Route path="/site-map" element={<SiteMap />} />
                <Route path="/*" element={<Error404 />} />
            </Routes>
          <Footer />
        </DataProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
