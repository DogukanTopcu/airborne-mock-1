import Layout from "./Components/Layout";
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import About from "./Components/About";
import Experiences from "./Components/Experiences";
import Sponsores from "./Components/Sponsores";
import Support from "./Components/Support";
import Contact from "./Components/Contact";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/sponsores" element={<Sponsores />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
