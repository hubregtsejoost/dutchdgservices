import Nav from './components/Nav';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Over from './components/Over';
import Footer from './components/Footer'
import Converter from './components/Converter';
import HeroImage from './components/HeroImage';
import Alert from './components/Alert';

function App() {
  return (
    <div>
      <Alert />
      <Nav />
      <Hero />
      <HeroImage />
      <Cards />
      <Over />
      <Converter />
      <Footer />
    </div>
  );
}

export default App;