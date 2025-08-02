import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-16"> {/* Adds spacing between sections */}
        <Hero />
        <AboutMe />
        <Skills />
      </main>
    </div>
  );
}


export default App;