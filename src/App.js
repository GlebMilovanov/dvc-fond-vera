import { Gratitude } from './components/Gratitude/index';
import { Header } from './components/Header/index';
import { Hero } from './components/Hero/index';
import { ThankYou } from './components/ThankYou';

function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <ThankYou/>
      <Gratitude/>
    </div>
  );
}

export default App;
