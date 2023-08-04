import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ThankYou } from './components/ThankYou';
import { Gratitude } from './components/Gratitude';
import { WhatNext } from './components/WhatNext';
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <ThankYou />
      <Gratitude />
      <WhatNext />
      <Footer />
    </div>
  );
}

export default App;
