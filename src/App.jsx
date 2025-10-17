import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Slider from "./pages/Slider";
import Whatwe from "./pages/Whatwe";
import Product from "./pages/Product";
import Tvshow from "./pages/Tvshow";
import Ott from "./pages/Ott";
import IPL from "./pages/IPL";
import Channel from "./pages/Channel";
import Tvmovie from "./pages/Tvmovie";
import Contact from "./pages/Contact";
import Founder from "./pages/Founder";
import Tvmore from "./pages/Tvmore";
import Newsmore from "./pages/Newsmore";
import Entermore from "./pages/Entermore";
import Gallerymore from "./pages/Gallerymore";
import Productmore from "./pages/Productmore";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Slider />} />   {/* Home page */}
        <Route path="/about" element={<About />} /> {/* About page */}
        <Route path="/whatwe" element={<Whatwe />} /> {/* what we do page */}
        {/* <Route path="/product" element={<Product />} /> 
        <Route path="/tvshow" element={<Tvshow />} /> */}

        {/* <Route path="/ott" element={<Ott />} /> */}
        {/* <Route path="/ipl" element={<IPL />} /> */}
        <Route path="/service/ipl" element={<IPL />} />
        <Route path="/service/ott" element={<Ott />} />
        <Route path="/service/tvshow" element={<Tvshow />} />
        <Route path="/service/product" element={<Product />} />
           <Route path="/service/channel" element={<Channel />} />
             <Route path="/service/FOUNDER" element={<Founder />} />
                   <Route path="/service/tvmovie" element={<Tvmovie />} />
                    <Route path="/tvmore" element={<Tvmore />} />
                      <Route path="/newsmore" element={<Newsmore />} />
                     <Route path="/contact" element={<Contact />} /> 
                      <Route path="/entermore" element={<Entermore />} /> 
                      <Route path="/gallerymore" element={<Gallerymore />} /> 
                           <Route path="/productmore" element={<Productmore />} /> 
                              <Route path="/welcomepage" element={<WelcomePage />} /> 
           

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
