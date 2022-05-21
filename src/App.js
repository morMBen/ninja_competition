import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import HomePageMobile from './screens/homePage/HomePageMobile';
import SpeedRound from './screens/speedRound/SpeedRound';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <BrowserRouter>
      {isNavOpen && <NavBar />}
      <Routes>
        <Route path='*' element={<HomePageMobile />} />
        <Route
          path='/'
          element={<HomePageMobile setIsNavOpen={setIsNavOpen} />}
        />
        <Route
          path='/speed-round'
          element={
            <SpeedRound roundType={'speed'} setIsNavOpen={setIsNavOpen} />
          }
        />
        <Route
          path='/semi-official-round'
          element={
            <SpeedRound
              roundType={'semi-official'}
              setIsNavOpen={setIsNavOpen}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
