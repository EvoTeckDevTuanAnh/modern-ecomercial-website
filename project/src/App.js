import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/basic/Layout';
import Home from './pages/client/Home';
import About from './pages/client/About';
import Contact from './pages/client/Contact';
import './App.css'
function App() {
  return (
    <>
      {/* router component   */}
      <BrowserRouter>
        <Routes>
          {/* group route */}
          <Route  path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='about' element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
