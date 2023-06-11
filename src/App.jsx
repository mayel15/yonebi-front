import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login';
import HeaderNav from './components/Header/HeaderNav';
import './App.css'
import CategoryPage from './components/CategoryPage/CategoryPage';
import Resource from './components/Resource/Resource';
import Sidebar from './components/Sidebar/Sidebar';
import AddResource from './components/AddResource/AddResource';
import AdminHome from './components/AdminHome/AdminHome';
import Categories from './components/Categories/Categories';
import Subjects from './components/Subjects/Subjects';

function App() {
  return (
    <Router >
      <HeaderNav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/admin/login' element={<Login access="login" />} />
        <Route path='/admin/signup' element={<Login access="signup" />} />
        <Route path='/admin/add' element={<AddResource />} />
        <Route path='/admin/home' element={<AdminHome/>} />
        <Route path='/admin/subjects' element={<Subjects />} />
        <Route path='/admin/categories' element={<Categories />} />
        <Route path='/:subject/:category' element={<CategoryPage />} />
        <Route path='/:subject/' element={<Categories />} />
        <Route path='/admin/:subject/:category' element={<CategoryPage view='admin'/>} />
      </Routes>
    </Router>
  );
}

export default App;