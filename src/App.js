import { Gratitude } from './components/Gratitude/index';
import { Header } from './components/Header/index';
import { Hero } from './components/Hero/index';
import { ThankYou } from './components/ThankYou/index';
import { WhatNext } from './components/WhatNext/index';
import { Footer } from './components/Footer/index'

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
