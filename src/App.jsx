import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Gestion from './components/Gestion';
import HeaderNav from './components/Header/HeaderNav';
import './App.css'
import CategoryPage from './components/CategoryPage/CategoryPage';
import Resource from './components/Resource/Resource';

import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Router >
      <HeaderNav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/admin/login' element={<Login access="login" />} />
        <Route path='/admin/signup' element={<Login access="signup" />} />
        <Route path='/admin/gestion' element={<Gestion />} />
        <Route path='/:subject/:category' element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;