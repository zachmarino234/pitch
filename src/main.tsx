import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import Layout from './layouts/Layout.tsx';
import Cards from './pages/Cards.tsx';
import CaseStudies from './pages/CaseStudies.tsx';
import About from './pages/About.tsx';
import Home from './pages/Home.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="cards" element={<Cards />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
