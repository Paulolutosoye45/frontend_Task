import { useEffect, useState } from 'react';
import './App.css'

import Navbar from './components/Navbar';
import Header from './components/Header';
import SponsorCompoents from './components/SponsorComponents';
import Footer from './components/Footer';
import Section_1 from './components/Section_1';
import Community from './components/Community';
import MayEdition from './components/MayEdition';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <div className='max-w-screen-2xl mx-auto'>
      <div className=' bg-[#f9f1ff] relative'>
        <Navbar/> 
         <Header/>
         <Section_1/>
        <SponsorCompoents/>
        <MayEdition/>
        <Community/>
        <Footer/>
      </div>
    </div>
  )
}


export default App
