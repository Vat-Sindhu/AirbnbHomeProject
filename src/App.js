import React  from 'react';
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './components/Header'
import './App.css';
import OptionsTab from './components/OptionsTab';
import Container from '@mui/material/Container'
import LocationCards from './components/LocationCards';
import Footer from './components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import AirbnbHome from './Pages/AirbnbHome';
import LinkRoutes from './components/LinkRoutes';

import { ThemeContextProvider } from './Context/ThemeContextProvider';
function App() {
  return (
   <>
   <ThemeContextProvider>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<LandingPage/>}/>
     <Route  path='/AirbnbHome' element={<AirbnbHome/>}/>
     <Route/>
   </Routes>
   </BrowserRouter>
   </ThemeContextProvider>
   </>   
  );

}

export default App;
