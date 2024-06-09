import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import Footer from './components/UI/Footer/Footer';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, [])

  return (
    isAuth
      ?
      <AuthContextProvider isAuth={isAuth} setIsAuth={setIsAuth}>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
      :
      <AuthContextProvider isAuth={isAuth} setIsAuth={setIsAuth}>
        <BrowserRouter>
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
  )
}

export default App;