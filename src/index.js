import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Volunteers from './pages/Volunteers/Volunteers';
import './i18n'
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage";
import { Contacts } from './pages/Contacts/Contacts';
import logo from './imgs/mria110-110.jpg'
import Partners from './pages/Partners/Partners';
import { Donation } from './pages/Donation/Donation';
import { Awards } from './pages/Awards/Awards';
import { Projects } from './pages/Projects/Projects';

export default function Main() {
  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = logo; 
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/projects" element={<Projects />} />


          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

