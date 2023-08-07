import { Route, Routes } from 'react-router-dom';

import { Header } from './layout/Header';
import { Hero } from './layout/Hero';
import { ThankYou } from './layout/ThankYou';
import { Gratitude } from './components/Gratitude';
import { Certificate } from './components/Certificate';
import { WhatNext } from './components/WhatNext';
import { Footer } from './layout/Footer';
import { WhatElse } from './components/WhatElse';

function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <ThankYou />
      <Routes>
        <Route
          path="/dvc-blagodarnost"
          element={
            <>
              <Gratitude />
              <WhatNext />
            </>
          }
        />
        <Route
          path="/dvc-gramota"
          element={
            <>
              <Certificate />
              <WhatElse />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
