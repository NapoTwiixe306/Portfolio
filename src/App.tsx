import React from 'react';
import { HomePage, AboutMePage } from './Components';
import { Navbar, Footer } from './Components/Widget';
import './scss/style.scss';

function App() {
  return (
   <>
      <Navbar/>
      <HomePage/>
      <AboutMePage/>
      <Footer/>
   </>
  );
}

export default App;
