
import { Navbar, Home, About, Discord,  Skills, Portfolio, Footer,} from './components';

const App = () => {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Home />
      </div>
      <About />
      <Discord />
      <Skills />

      <Portfolio />

      <Footer />
    </div>
  );
}

export default App
