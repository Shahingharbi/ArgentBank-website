import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Home from '../../pages/home';
import Connexion from '../../pages/connexion';
import Header from '../header';
import User from '../../pages/user';
import Footer from '../footer';

function Router() {
  return (
    <div>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<Connexion />} />
            <Route path='/user' element={<User />} />
        </Routes> 
        <Footer />
    </div>
  )
}

export default Router