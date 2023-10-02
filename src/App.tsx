import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './comonents/NavBar';
import AppRouter from './comonents/AppRouter';
import Footer from './comonents/Footer';
import  {AnimatePresence} from 'framer-motion'


function App() {

  return (
    <AnimatePresence mode='wait'>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <NavBar/>
          <AppRouter/>
          <Footer/>
        </div>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
