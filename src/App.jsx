import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
import Informations from './components/Informations/Informations';

function App() {
  return (
    <Router >
      <HeaderNav />
      <Switch>
        <Route path='/yonebi-front/' element={<Homepage />} />
        <Route path='/yonebi-front/:subject/:category' element={<CategoryPage />} />
        <Route path='/yonebi-front/infos' element={<Informations />} />
        <Route path='/yonebi-front/admin/login' element={<Login access="login" />} />
        <Route path='/yonebi-front/admin/signup' element={<Login access="signup" />} />
        <Route path='/yonebi-front/admin/add' element={<AddResource />} />
        <Route path='/yonebi-front/admin/home' element={<AdminHome />} />
        <Route path='/yonebi-front/admin/subjects' element={<Subjects />} />  
        <Route path='/yonebi-front/admin/categories' element={<Categories />} />
        <Route path='/yonebi-front/admin/:subject/:category' element={<CategoryPage view='admin'/>} />
      </Switch>
    </Router>
  );
}

export default App;