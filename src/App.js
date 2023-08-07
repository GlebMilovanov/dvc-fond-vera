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
      {/* <Gratitude /> */}
      <Certificate />
      {/* <WhatNext /> */}
      <WhatElse/>
      <Footer />
    </div>
  );
}

export default App;
