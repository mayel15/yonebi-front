import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Gestion from './components/Gestion';
import CategoryPage from './components/CategoryPage';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router >
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/admin/login' element={<Login access="login" />} />
        <Route path='/admin/signup' element={<Login access="signup" />} />
        <Route path='/admin/gestion' element={<Gestion />} />
      </Routes>
      <div className="container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/:sujet/:categorie" element={CategoryPage} />
          </Routes>

        </div>
      </div>

    </Router>
  );
}

export default App;